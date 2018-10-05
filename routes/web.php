<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Auth::routes();

/**
 * Home
 */
Route::get('/', 'HomeController@index')->name('welcome');
Route::get('/home', 'HomeController@home')->name('home');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::prefix('epanel')->group(
    function () {
        /**
         * Admin Home
         */
        Route::get('/', 'AdminController@index')->name('epanel');
        /**
         * Admin Logon
         */
        Route::get('/login', 'Auth\AdminLoginController@showLoginForm')
            ->name('epanel.login');
        Route::post('/login', 'Auth\AdminLoginController@login')
            ->name('epanel.processLogin');
        Route::get('/logout', 'Auth\AdminLoginController@logout')
            ->name('epanel.logout');
        /**
         * User Registrations
         */
        Route::get('/register/admin', 'Auth\AdminRegisterController@showRegistrationForm')
            ->name('epanel.register.admin');
        //Register One User
        Route::get('/register/user', 'Auth\RegisterController@showRegistrationForm')
            ->name('epanel.register.user');
        Route::post('/register/user', 'Auth\RegisterController@register')
            ->name('epanel.registerProcess.user');
        //Register Multiple User
        Route::get('/register/users', 'Auth\RegisterController@showRegistrationUploadForm')
            ->name('epanel.register.users');
        Route::post('/register/users', 'Auth\RegisterController@bulkRegister')
            ->name('epanel.registerProcess.users');

        /**
         * Reset Admin Password
         */
        Route::prefix('password')->group(
            function () {
                Route::get('/reset', 'Auth\AdminForgotPasswordController@showLinkRequestForm')->name('admin.password.request'); // step 1
                Route::post('/email', 'Auth\AdminForgotPasswordController@sendResetLinkEmail')->name('admin.password.email'); // step 2
                Route::get('/reset/{token}', 'Auth\AdminResetPasswordController@showResetForm')->name('admin.password.reset'); // step 3
                Route::post('/reset', 'Auth\AdminResetPasswordController@reset'); // step 4
            }
        );

        /**
         * File Upload Parsing
         */
        Route::post('/files/parse', 'API\BulkUploadParseController@parseFile');

        /**
         * Questions Management
         */
        Route::get('/questions/upload', 'QuestionController@upload')->name('questions.upload');
        Route::get('/questions/upload/preview', 'QuestionController@uploadPreview')->name('questions.upload.preview');
        Route::post('/questions/save', 'QuestionController@bulkUpload');


        /**
         * User Management
         */
        Route::get('/users/index','AdminController@listUsers')->name('users.index');
        /**
         * Route Resources
         */
        Route::resources(
            [
                'courses' => 'CourseController',
                'configs' => 'ConfigController',
                'scripts' => 'ScriptController',
                'questions' => 'QuestionController',
            ]
        );

        Route::apiResources(
            [
                'questionsList' => 'API\BulkUploadParseController',
            ]
        );
    }
);
