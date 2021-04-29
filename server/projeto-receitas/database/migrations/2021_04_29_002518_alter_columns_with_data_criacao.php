<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterColumnsWithDataCriacao extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::table('categoria', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('subcategoria', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('subcategoria_receita', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('local_preparo', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('tipo_modo', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('usuario', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        Schema::table('receita', function (Blueprint $table) {$table->dropColumn('data_criacao');});
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('categoria', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('subcategoria', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('subcategoria_receita', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('local_preparo', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('tipo_modo', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('usuario', function (Blueprint $table) {$table->dateTime('data_criacao');});
        Schema::table('receita', function (Blueprint $table) {$table->dateTime('data_criacao');});
    }
}
