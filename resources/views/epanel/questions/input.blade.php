@extends('epanel.master')
@section('title')
Upload Question
@endsection
@section('content')
<input-question :courses="{{$courses}}"></input-question>
@endsection
