<?php

namespace App\Libraries\Users\Features;

use App\Libraries\Users\Protocols\UserProtocol;
use App\Models\User;
use App\Libraries\Users\Exceptions\ExceptionLib\InsertUserException;
use App\Libraries\Users\Features\Protocol\InserUserProtocol;

class InsertUser implements InserUserProtocol
{
    public function insertWithSendEmail(UserProtocol $userProtocol): int
    {
        $this->verifyObrigatoriedadeCampos($userProtocol);
        $this->isUniqueEmail($userProtocol->getEmail());
        return $this->insertUserAndReturnIdUser($userProtocol);
    }

    protected function insertUserAndReturnIdUser(UserProtocol $userProtocol): int
    {
        $user = User::create([
            'nome' => $userProtocol->getName(),
            'email' => $userProtocol->getEmail(),
            'password' => $userProtocol->getPassword(),
            'img_perfil' => $userProtocol->getImgPerfil(),
            'img_capa' => $userProtocol->getImgCapa(),
            'tipo_usuario_id' => $userProtocol->getTipoUsuarioId()
        ]);
        return $user->id;
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

    private function isUniqueEmail(string $email): bool{
        $unique = $this->consultarIsUniqueEmail($email);
        if($unique){
            return true;
        }
        throw InsertUserException::emailNotUnique();
    }

    public function consultarIsUniqueEmail(string $email): bool {
        return User::where('email', $email)->count() <= 0;
    }

    private function getCamposValidate(): array {
        return [
            'nome' => [
                'getFunction' => 'getName',
                'setFunction' => 'setName',
                'nome' => 'Nome',
            ],
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


