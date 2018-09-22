<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'questions', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('course_id')->index('course_id');
                $table->string('question')->unique();
                $table->string('question_image')->nullable();
                $table->string('option_a');
                $table->string('option_b');
                $table->string('option_c');
                $table->string('option_d');
                $table->string('answer');
                $table->timestamps();
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
