<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAvaliacaoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('avaliacao', function (Blueprint $table) {
            $table->id();
            $table->foreignId('receita_id')->constrained('receita');
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->string('descricao', 100);
            $table->float('valor', 10, 2);
            $table->boolean('status_ativo')->default(true);
            $table->text('imagens');
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
        Schema::dropIfExists('avaliacao');
    }
}
