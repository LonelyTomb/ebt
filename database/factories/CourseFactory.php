<?php

use Faker\Generator as Faker;

$factory->define(
    App\Models\Course::class, function (Faker $faker) {
        return [
            'title' => $faker->word,
            'code' => $faker->randomNumber(3),
            'questions' => $faker->numberBetween(1, 10),
            'duration' => $faker->numberBetween(1, 10),
            'points' => $faker->numberBetween(1, 5)
        ];
    }
);
