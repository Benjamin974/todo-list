<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $priorite = [
            [
                'id' => 1,
                'priorite' => 'faible'
            ],
            [
                'id' => 2,
                'priorite' => 'moyen'
            ],
            [
                'id' => 3,
                'priorite' => 'fort'
            ],
        ];

        DB::table('priorite')->insert(
            $priorite
        );
        $todo = [
            [
                'id' => 1,
                'titre' => 'Manger',
                "date_execution" => '2021-02-10',
                'priorite_id' => 2,
                'is_check' => false,
                'description' => 'Manger pour se sentir bien'
            ],
            [
                'id' => 2,
                'titre' => 'Boire',
                "date_execution" => '2021-02-11',
                'priorite_id' => 3,
                'is_check' => false,
                'description' => 'Boire pour se sentir bien'
            ]
        ];

        DB::table('todo')->insert(
            $todo
        );
    }
}
