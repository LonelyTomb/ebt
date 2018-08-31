<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Script extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'course_id', 'questions_list', 'answers_list', 'time',
    ];

    public function course()
    {
        return $this->belongsTo('App\Models\Script');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
