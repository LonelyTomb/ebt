@extends('epanel.master')

@section('title')
Register User
@endsection

@section('content')
<register-component :courses="{{$courses}}"></register-component>
@endsection