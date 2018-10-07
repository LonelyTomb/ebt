<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Rap2hpoutre\FastExcel\FastExcel;

use Illuminate\Pagination\LengthAwarePaginator;

class BulkUploadParseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Process Uploaded Excel Sheet
     *
     * @param Request $request input tag name must be 'list'
     * @return void
     */
    public function parseFile(Request $request)
    {
        if ($request->hasFile('list')) {
            if ($request->file('list')->isValid()) {
                $path = $request->file('list')->getRealPath();
                $collection = (new FastExcel)->import($path);
                // $pagination = new LengthAwarePaginator($collection,$collection->count(),5);
                return ['collection' => $collection];
            }
        }
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
