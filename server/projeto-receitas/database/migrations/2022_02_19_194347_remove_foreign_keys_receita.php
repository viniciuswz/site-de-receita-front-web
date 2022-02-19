<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveForeignKeysReceita extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('receita', function (Blueprint $table) {
            $table->dropForeign(['usuario_id']);
            $table->dropColumn('usuario_id');
            
            $table->dropForeign(['sub_receita_id']);
            $table->dropColumn('sub_receita_id');

            $table->dropForeign(['ingrediente_id']);
            $table->dropColumn('ingrediente_id');

            $table->dropForeign(['local_preparo_id']);
            $table->dropColumn('local_preparo_id');

            $table->dropForeign(['modo_preparo_id']);
            $table->dropColumn('modo_preparo_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
