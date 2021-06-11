<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipoNotificacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_notificacao', function (Blueprint $table) {
            $table->id();
            $table->string('descricao', 50);
            $table->string('verbo_singular', 50);
            $table->string('verbo_plural', 50);
            $table->string('url_destino', 200);
            $table->string('icone', 200);
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
        Schema::dropIfExists('tipo_notificacao');
    }
}
