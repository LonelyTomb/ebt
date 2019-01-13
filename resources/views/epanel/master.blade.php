<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>




@section('title'){{ config('app.name', 'Laravel') }}@show</title>

    <!-- Scripts -->
    <script src="{{mix('js/manifest.js')}}" defer></script>
    <script src="{{mix('js/vendor.js')}}" defer></script>
    <script src="{{mix('js/app.js')}}" defer></script>
    <!-- Fonts -->

    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet"> @yield('styles')
</head>

<body>
    <div class="" id="app">
        <v-app>
            @auth('admin')
            <epanel-header></epanel-header>

            @endauth
            <v-content>
                @yield('content')

            </v-content>
            @auth
            <epanel-footer></epanel-footer>
            @endauth
        </v-app>
    </div>

</body>

</html>
