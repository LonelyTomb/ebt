<?php

namespace App\Http\Controllers;

use App\Http\Requests\CourseCreationRequest;
use App\Models\Course;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CourseController extends Controller
{
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('epanel.courses.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\CourseCreationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CourseCreationRequest $request)
    {
        $validated = $request->validated();
        $course = new Course();

        $course->title = $request->title;
        $course->code = $request->code;
        $course->questions = $request->questions;
        $course->points = $request->points;
        $course->duration = $request->duration;
        $course->alwaysAvailable = $request->alwaysAvailable;
        if(!$request->alwaysAvailable){
            $course->start_time = new Carbon($request->startTime);
            $course->stop_time = new Carbon($request->stopTime);
        }

        $course->save();
        return ['status' => 'success'];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }
}
