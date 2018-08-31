<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SelectedCourse extends Model
{
    protected $fillables = ['user_id','course_id'];
}
