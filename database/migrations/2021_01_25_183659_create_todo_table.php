<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTodoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('priorite', function (Blueprint $table) {
            $table->id();
            $table->string('priorite');
            $table->timestamps();
        });

        Schema::create('todo', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string("date_execution");
            $table->string("description");
            $table->bigInteger('priorite_id')->unsigned();
            $table->foreign('priorite_id')->references('id')->on('priorite');
            $table->boolean('is_check');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::disableForeignKeyConstraints();
        Schema::dropIfExists('todo');
        Schema::dropIfExists('priorite');
        Schema::enableForeignKeyConstraints();
    }
}
