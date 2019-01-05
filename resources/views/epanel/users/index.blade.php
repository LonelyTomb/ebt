@extends('epanel.master')
@section('title')
User Management
@endsection

@section('content')

<user-controls :users-list="{{$users}}"></user-controls>
@endsection
