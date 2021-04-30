<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notificacao', function (Blueprint $table) {
            $table->id();
            $table->foreignId('receita_id')->constrained('receita');
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('tipo_notificacao_id')->constrained('tipo_notificacao');

            $table->integer('qtd_outras_pessoas');
            $table->integer('aux_id');
            $table->boolean('status_ativo');

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
        Schema::dropIfExists('notificacao');
    }
}
