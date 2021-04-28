<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModoPreparoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modo_preparo', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tipo_modo_id')->constrained('tipo_modo');
            $table->integer('num_passo');
            $table->boolean('status_ativo');
            $table->text('descricao');
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
        Schema::dropIfExists('modo_preparo');
    }
}
