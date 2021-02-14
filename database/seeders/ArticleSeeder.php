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
        DB::table('roles')->insert(
            [
                'id' => 1,
                'name' => 'admin'
            ]
        );
        $users = [
            [
                'id' => 1,
                'name' => 'admin',
                'email' => 'admin@admin.com',
                'id_role' => 1,
                "password" => bcrypt('admin'),

            ],
        ];

        DB::table('users')->insert(
            $users
        );

       
    }
}
