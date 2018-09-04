<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'surname', 'firstname', 'othernames', 'gender', 'username', 'email', 'selected_courses', 'password', 'picture', 'remember_token', 'status', 'login_time', 'logout_time',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['courses'];

    public function scripts()
    {
        return $this->hasMany('App\Models\Scripts');
    }
    public function courses()
    {
        return $this->belongsToMany('App\Models\Course', 'selected_courses');
    }
}
