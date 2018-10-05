@extends('epanel.master')
@section('title')
User Management
@endsection

@section('content')

<user-controls-component :users-list="{{$users}}"></user-controls-component>
@endsection
