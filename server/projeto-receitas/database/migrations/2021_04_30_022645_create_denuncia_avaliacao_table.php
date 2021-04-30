<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDenunciaAvaliacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('denuncia_avaliacao', function (Blueprint $table) {
            $table->id();

            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('avaliacao_id')->constrained('avaliacao');
            $table->text('descricao');
            $table->text('coment_resolucao');
            $table->boolean('status_ativo');
            $table->boolean('status_denuncia');
            $table->dateTime('data_avaliacao');

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
        Schema::dropIfExists('denuncia_avaliacao');
    }
}
