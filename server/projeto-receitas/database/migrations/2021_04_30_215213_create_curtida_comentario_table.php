<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurtidaComentarioTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curtida_comentario', function (Blueprint $table) {
            $table->id();
            $table->boolean('status_ativo')->default(true);
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('comentario_id')->constrained('comentario');

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
        Schema::dropIfExists('curtida_comentario');
    }
}
