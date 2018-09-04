@extends('epanel.master')
@section('title')
Upload Question
@endsection
@section('content')
<upload-question :courses="{{$courses}}"></upload-question>
@endsection
