<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TipoUser extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipo_usuario')->insert([
            [
                'descricao' => 'Administrador',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'descricao' => 'Moderador',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'descricao' => 'Comum',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        ]);
    }
}
