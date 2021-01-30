<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'id' => 1,
                'name' => 'Jean',
                'email' => 'jean@producteur.com',
                "password" => bcrypt('producteur'),

            ],
            [
                'id' => 2,
                'name' => 'Henry',
                'email' => 'henry@producteur.com',
                "password" => bcrypt('producteur'),

            ],
            [
                'id' => 3,
                'name' => 'Matthieu',
                'email' => 'matthieu@producteur.com',
                "password" => bcrypt('producteur'),

            ],
            [
                'id' => 4,
                'name' => 'Robert',
                'email' => 'robert@producteur.com',
                "password" => bcrypt('producteur'),

            ],
            [
                'id' => 5,
                'name' => 'George',
                'email' => 'george@client.com',
                "password" => bcrypt('client'),

            ],
            [
                'id' => 6,
                'name' => 'admin',
                'email' => 'maintenance@admin.com',
                "password" => bcrypt('admin'),

            ],
        ];

        DB::table('users')->insert(
            $users
        );

        $articles = [
            [
                'id' => 1,
                'user_id' => 1,
                'title' => 'article 1',
                'text' => "c'est l'article 1"
            ],

            [
                'id' => 2,
                'user_id' => 2,
                'title' => 'article 2',
                'text' => "c'est l'article 2"
            ],

            [
                'id' => 3,
                'user_id' => 3,
                'title' => 'article 3',
                'text' => "c'est l'article 3"
            ]

        ];

        DB::table('articles')->insert(
            $articles
        );
    }
}
