<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDenunciaReceitaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('denuncia_receita', function (Blueprint $table) {
            $table->id();

            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('receita_id')->constrained('receita');

            $table->text('descricao');
            $table->text('coment_resolucao');
            $table->boolean('status_denuncia')->default(true);
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
        Schema::dropIfExists('denuncia_receita');
    }
}
