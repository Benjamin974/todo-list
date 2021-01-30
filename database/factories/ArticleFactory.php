<?php

namespace Database\Factories;

use App\Models\Article;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $factory->define(Article::class, function (Faker $faker) {
        return [
            'title' => $faker->sentence($nbWords = 3, $variableNbWords = true),
            'text' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        ];
    }
}
