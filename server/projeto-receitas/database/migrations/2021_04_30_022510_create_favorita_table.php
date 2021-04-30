<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFavoritaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('favorita', function (Blueprint $table) {
            $table->id();
            $table->foreignId('usuario_id')->constrained('usuario');
            $table->foreignId('receita_id')->constrained('receita');
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
        Schema::dropIfExists('favorita');
    }
}
