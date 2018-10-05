@extends('epanel.master') @section('content')

<section class="uk-section uk-section-default uk-container uk-card uk-card-hover uk-card-default uk-margin-auto">
    <div class="uk-card-header">
        <h3 class="uk-card-title uk-text-center">Data Capture</h3>
    </div>
    <div class="uk-child-width-1-3@m uk-child-width-1-1@s uk-grid-margin uk-grid uk-card-body" uk-grid>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block" href="{{route('epanel.register.user')}}">Add New User</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block" href="{{route('epanel.register.users')}}">Upload users List</a>
        </div>

        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block" href="{{route('courses.create')}}">Add New Course</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block" href="{{route('questions.upload')}}">Upload Question List</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block" href="{{route('questions.create')}}">Input Question</a>
        </div>
    </div>
</section>
<hr class="uk-divider-icon">
<section class="uk-section uk-section-default uk-container uk-card uk-card-default uk-card-hover">
    <div class="uk-card-header">
        <h3 class="uk-card-title uk-text-center">Data Management</h3>
    </div>
    <div class="uk-child-width-1-3@m uk-child-width-1-1@s uk-grid-margin uk-grid uk-card-body" uk-grid>
        <div>
        <a href="{{route('users.index')}}" class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block">User Controls</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block">Course Controls</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block">Questions Controls</a>
        </div>
        <div>
            <a class="uk-tile uk-tile-small uk-button uk-tile-secondary uk-padding-small uk-button-primary uk-display-block">Input Question</a>
        </div>
    </div>
</section>
@endsection
