<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocalPreparo extends Model
{
    use HasFactory;

    protected $table = 'local_preparo';
    protected $fillable = ['icone', 'descricao', 'status_ativo'];

    public function rules() {
        return [
            'icone' => 'required|max:200',
            'descricao' => 'required|min:5|max:64'
        ];
    }

    public function feedback() {
        return [
            'required' => 'O campo :attribute é obrigatório!',
            'icone.max' => 'O tamanho máximo suportado para o ícone é de 200 caracteres!',
            'descricao.min' => 'A descrição deve ter pelo menos 5 caracteres',
            'descricao.max' => 'A descrição deve ter no máximo 64 caracteres'
        ];
    }

}
