@extends('epanel.master')

@section('content')

<section class="uk-section uk-section-default uk-flex uk-flex-row uk-container">

<a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right" href="{{route('epanel.register.user')}}">Add New User</a>

<a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right" href="{{route('courses.create')}}">Add New Course</a>
<a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">Upload Question List</a>
<a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">Input Question</a>
</section>

<section class="uk-section uk-section-default uk-flex uk-flex-row uk-container">
        <a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">User Controls</a>
        <a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">Course Controls</a>
        <a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">Questions Controls</a>
        <a class="uk-tile uk-tile-small uk-width-1-3@m uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-margin-right">Input Question</a>
        </section>
@endsection
