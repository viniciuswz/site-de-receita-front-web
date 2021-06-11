<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoModoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_modo', function (Blueprint $table) {
            $table->id();
            $table->string('icone', 200);
            $table->string('descricao', 64);
            $table->boolean('status_ativo')->default(true);
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
        Schema::dropIfExists('tipo_modo');
    }
}
