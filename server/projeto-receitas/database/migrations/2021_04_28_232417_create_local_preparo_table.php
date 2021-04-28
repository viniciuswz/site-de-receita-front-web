<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocalPreparoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('local_preparo', function (Blueprint $table) {
            $table->id();
            $table->string('icone', 200);
            $table->string('descricao', 64);
            $table->boolean('status_ativo');
            $table->dateTime('data_criacao');
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
        Schema::dropIfExists('local_preparo');
    }
}
