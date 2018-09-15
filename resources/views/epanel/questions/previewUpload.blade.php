@extends('epanel.master')
@section('title')
    Preview Upload
@endsection
@section('content')
<preview-upload-questions :questions="{{$questions}}"></preview-upload-questions>
@endsection
