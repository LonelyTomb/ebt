<?php

namespace App\Http\Controllers;

use App\Models\User;

class AdminController extends Controller
{

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:admin');
        $this->users = User::all();
    }

    /**
     * Format Users List
     *
     *
     * @return \Illuminate\Support\Collection
     */
    public function getUsers(): \Illuminate\Support\Collection
    {
        return $this->users->transform(function ($user, $key) {
            return collect($user)->except(['picture', 'login_time', 'logout_time', 'created_at', 'updated_at'])->all();
        });
    }

    /**
     * Return Admin Home
     *
     * @return void
     */
    public function index()
    {
        return view('epanel.home');
    }

    /**
     * Return Users List Page
     *
     * @return void
     */
    public function listUsers()
    {
        return view('epanel.users.index', ['users' => $this->getUsers()]);
    }
}
