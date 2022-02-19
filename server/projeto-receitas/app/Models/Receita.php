<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Receita extends Model
{
    use HasFactory;

    protected $table = 'receita';
    protected $fillable = ['titulo', 'imagens', 'tempo_preparo', 'qtd_porcoes', 'status_ativo', 'status_aprovacao'];

    public function rules() {
        return [
            'titulo' => 'required|min:5',
            'imagens' => 'required',
            'tempo_preparo' => 'required|numeric|min:1|max:4320',
            'qtd_porcoes' => 'required|integer|min:1|max:100',
            'status_aprovacao' => 'required|boolean'
        ];
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório!',
            'titulo.min' => 'O título deve ter no mínimo 5 caracteres!',
            'tempo_preparo.numeric' => 'O tempo de preparo deve ser no formato numérico!',
            'tempo_preparo.min' => 'O tempo de preparo deve ser de no mínimo 1 minuto!',
            'tempo_preparo.max' => 'O tempo de preparo deve ser de no máximo 3 dias!',
            'qtd_porcoes.min' => 'A quantidade de porções deve ser pelo menos 1 unidade!',
            'qtd_porcoes.max' => 'O máximo de porções por receita é de 100 unidade!s',
            'status_aprovacao.boolean' => 'O staus de aprovação deve ser no formato booleano!',
        ];
    }

}
