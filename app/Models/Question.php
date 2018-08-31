<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question', 'question_image', 'option_1', 'option_2', 'option_3', 'option_4', 'answer',
    ];

    public function course()
    {
        return $this->belongsTo('App\Models\Course');
    }
    public function scripts()
    {
        return $this->hasMany('App\Models\Script');
    }
}
