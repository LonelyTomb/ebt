<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'code', 'questions', 'duration', 'status','points','alwaysAvailable','start_time','stop_time'
    ];

     /**
     * All of the relationships to be touched.
     *
     * @var array
     */
    protected $touches = ['users'];

    public function questions()
    {
        return $this->hasMany('App\Models\Question');
    }
    public function scripts()
    {
        return $this->hasMany('App\Models\Script');
    }
    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'selected_courses');
    }
    public function setDurationAttribute($value)
    {
        $this->attributes['duration'] = $value * 60;
    }
    public function getDurationAttribute($value)
    {
        return $value / 60;
    }
}
