<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
       /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['course'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question', 'question_image', 'option_a', 'option_b', 'option_c', 'option_d', 'answer',
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
