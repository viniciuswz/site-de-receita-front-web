<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuarioNotificarTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuario_notificar', function (Blueprint $table) {
            $table->id();

            $table->foreignId('notificacao_id')->constrained('notificacao');
            $table->foreignId('usuario_id')->constrained('usuario');

            $table->dateTime('data_visu');
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
        Schema::dropIfExists('usuario_notificar');
    }
}
