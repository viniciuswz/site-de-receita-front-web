<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReceitaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('receita', function (Blueprint $table) {
            $table->id();
            //normal columns
            $table->string('titulo', 100);
            $table->text('imagens');
            $table->float('tempo_preparo', 4, 2);
            $table->integer('qtd_porcoes');
            $table->boolean('status_ativo');
            $table->boolean('status_aprovacao');
            $table->dateTime('data_criacao');

            //foreign keys
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('sub_receita_id')->constrained('subcategoria_receita');
            $table->foreignId('ingrediente_id')->constrained('ingredientes');
            $table->foreignId('local_preparo_id')->constrained('local_preparo');
            $table->foreignId('modo_preparo_id')->constrained('modo_preparo');

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
        Schema::dropIfExists('receita');
    }
}
