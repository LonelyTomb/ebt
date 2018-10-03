<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
     */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/epanel';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        $courses = Course::all();
        return view('auth.register', compact('courses'));
    }
    /**
     * Show the application registration upload form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationUploadForm()
    {

        return view('auth.bulkRegister');
    }
    /**
     * Get a validator for an incoming registration request.
     *
     * @param  Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(Request $request)
    {
        return Validator::make($request->all(), [
            'surname' => 'required|string|max:255',
            'firstname' => 'required|string|max:255',
            'othernames' => 'required|string|max:255',
            'username' => 'required|string|min:3|max:255|unique:users',
            'gender' => 'required|string',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'picture' => 'nullable|file|image',
        ]);
    }
    /**
     * File Upload Function
     *
     * @param $file
     * @param App\Models\User $user
     * @return void
     */
    public function uploadImage($file, User $user)
    {
        if ($file->isValid()) {
            $filename = "{$user->username}.{$file->extension()}";
            $uploadPath = "user/{$user->id}";
            $file->storeAs($uploadPath, $filename);
            $user->picture = "$uploadPath/$filename";
            $user->save();
            return $user;
        }
        return;
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  Illuminate\Http\Request  $request
     * @return \App\Models\User
     */
    protected function create(Request $request)
    {
        $user = new User();

        $user->surname = $request->surname;
        $user->firstname = $request->firstname;
        $user->othernames = $request->othernames;
        $user->username = $request->username;
        $user->gender = $request->gender;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        $user->courses()->attach(explode(",", $request->courses));

        if ($request->hasFile('picture')) {
            $this->uploadImage($request->picture, $user);
        }
        return $user;
    }

    /**
     * Handle a registration request for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validator($request)->validate();

        event(new Registered($user = $this->create($request)));

        // $this->guard()->login($user);
        // return $this->registered($request, $user)

        // ?: redirect($this->redirectPath());
        return ['status' => 'success', 'message' => 'Registeration Successful'];
    }

    /**
     * Handle bulk registration requests for the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function bulkRegister(Request $requests){

        $count = 0;
        foreach($requests->users as $request){
            $user = new User();
            $user->surname = $request['surname'];
            $user->firstname = $request['firstname'];
            $user->othernames = $request['othernames'];
            $user->username = $request['username'];
            $user->gender = $request['gender'];
            $user->email = $request['email'];
            $user->password = Hash::make($request['surname']);
            $user->save();
            $count++;
        }
        return ['status' => 'success', 'message' => 'Bulk Registeration Successful','count'=>$count];
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('admin');
    }
}
