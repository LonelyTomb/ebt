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

Route::get('/', 'HomeController@index')->name('welcome');
Route::get('/home', 'HomeController@home')->name('home');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::prefix('epanel')->group(
    function () {
        Route::get('/', 'AdminController@index')->name('epanel');

        Route::get('/login', 'Auth\AdminLoginController@showLoginForm')
            ->name('epanel.login');
        Route::post('/login', 'Auth\AdminLoginController@login')
            ->name('epanel.processLogin');
        Route::get('/logout', 'Auth\AdminLoginController@logout')
            ->name('epanel.logout');

        Route::get('/register/admin', 'Auth\AdminRegisterController@showRegistrationForm')
            ->name('epanel.register.admin');
        Route::get('/register/user', 'Auth\RegisterController@showRegistrationForm')
            ->name('epanel.register.user');
            Route::post('/register/user', 'Auth\RegisterController@register')
            ->name('epanel.registerProcess.user');

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
        Route::resources(
            [
                'courses' => 'CourseController',
                'configs' => 'ConfigController',
                'scripts' => 'ScriptController',
                'questions' => 'QuestionController',
            ]
        );
    }
);
