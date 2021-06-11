<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurtidaAvaliacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('curtida_avaliacao', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('avaliacao_id')->constrained('avaliacao');
            $table->boolean('status_ativo')->default(true);
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
        Schema::dropIfExists('curtida_avaliacao');
    }
}
