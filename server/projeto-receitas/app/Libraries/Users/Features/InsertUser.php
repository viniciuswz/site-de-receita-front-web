<?php

namespace App\Libraries\Users\Features;

use App\Libraries\Users\Protocols\UserProtocol;
use App\Models\User;
use App\Libraries\Users\Exceptions\ExceptionLib\InsertUserException;

class InsertUser
{
    public function insertWithSendEmail(UserProtocol $userProtocol): User
    {
        $this->verifyObrigatoriedadeCampos($userProtocol);
        return User::create([
            // 'name' => $userProtocol->getName(),
            'email' => $userProtocol->getEmail(),
            'password' => $userProtocol->getPassword(),
            'img_perfil' => $userProtocol->getImgPerfil(),
            'img_capa' => $userProtocol->getImgCapa(),
            'tipo_usuario_id' => $userProtocol->getTipoUsuarioId()
        ]);
    }

    private function verifyObrigatoriedadeCampos(UserProtocol $user): bool {
        $camposInvalidos = [];
        foreach($this->getCamposValidate() as $key => $c) {
            if(empty($user->{$c['getFunction']}())){
                $camposInvalidos[] = "O campo '{$c['nome']}' é obrigatório";
            }
        }
        if(empty($camposInvalidos)){
            return true;
        }
        throw InsertUserException::insertUserColumnsEmpty($camposInvalidos);
    }

    private function getCamposValidate(): array {
        return [
            'email' => [
                'getFunction' => 'getEmail',
                'setFunction' => 'setEmail',
                'nome' => 'E-mail',
            ],
            'password' => [
                'getFunction' => 'getPassword',
                'setFunction' => 'setPassword',
                'nome' => 'Password'
            ],
            'img_perfil' => [
                'getFunction' => 'getImgPerfil',
                'setFunction' => 'setImgPerfil',
                'nome' => 'Imagem de Perfil'
            ],
            'img_capa' => [
                'getFunction' => 'getImgCapa',
                'setFunction' => 'setImgCapa',
                'nome' => 'Imagem de Capa'
            ],
            'tipo_usuario_id' => [
                'getFunction' => 'getTipoUsuarioId',
                'setFunction' => 'setTipoUsuarioId',
                'nome' => 'ID Tipo Usuário'
            ]
        ];
    }
}


