<?php

namespace App\Http\Controllers;

use App\Http\Requests\QuestionCreationRequest;
use App\Models\Course;
use App\Models\Question;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin');
        $this->courses = Course::all();
    }
    /**
     * Return Courses
     *
     * @return  \App\Models\Course
     */
    public function getCourses()
    {
        return $this->courses;
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
        return view('epanel.questions.input', ['courses' => $this->getCourses()]);
    }
    /**
     * Show the form for uploading resources.
     *
     * @return \Illuminate\Http\Response
     */
    public function upload()
    {
        return view('epanel.questions.upload', ['courses' => $this->getCourses()]);
    }
    /**
     * Show the form for uploading resources.
     * @param Collection $questions
     * @return \Illuminate\Http\Response
     */
    public function uploadPreview(Collection $questions, Course $course)
    {
        return view('epanel.questions.upload', compact('questions', 'course'));
    }

    /**
     * File Upload Function
     *
     * @param $file
     * @param App\Models\Question $question
     * @return void
     */
    public function uploadImage($file, Question $question)
    {
        if ($file->isValid()) {
            $filename = "{$question->id}.{$file->extension()}";
            $uploadPath = "courses/{$question->course->id}/{$question->id}";
            $file->storeAs($uploadPath, $filename);
            $question->picture = "$uploadPath/$filename";
            $question->save();
            return $question;
        }
        return;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  App\Http\Requests\QuestionCreationRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QuestionCreationRequest $request)
    {
        $validated = $request->validated();
        $question = new Question();
        $question->question = $validated['text'];
        $question->option_a = $validated['a'];
        $question->option_b = $validated['b'];
        $question->option_c = $validated['c'];
        $question->option_d = $validated['d'];
        $question->answer = $validated['correct'];
        $course = Course::find($validated['course']);
        $course->questions()->save($question);

        if ($request->hasFile('picture')) {
            $this->uploadImage($request->picture, $question);
        }
        return ['status' => 'success', 'message' => 'Question Created'];
    }
    /**
     * Mass Save Questions to Database
     *
     * @param Array $collection
     *
     */
    public function bulkUpload(Request $request)
    {

        $course = Course::find($request->course);
        $count = 0;
        foreach ($request->questions as $key => $questionRow) {
            $question = new Question();
            $question->question = $questionRow['question'];
            $question->option_a = $questionRow['option_a'];
            $question->option_b = $questionRow['option_b'];
            $question->option_c = $questionRow['option_c'];
            $question->option_d = $questionRow['option_d'];
            $question->answer = $questionRow['answer'];
            $course->questions()->save($question);
            $count++;
        }
        return ['status' => 'success', 'count' => $count];
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function show(Question $question)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function edit(Question $question)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Question $question)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Question  $question
     * @return \Illuminate\Http\Response
     */
    public function destroy(Question $question)
    {
        //
    }
}
