<?php

namespace App\Libraries\Users\Factories;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use App\Libraries\Users\Protocols\UserProtocol;

use Illuminate\Http\Request;

class InsertUserFactory
{
    public static function createUserProtocolByRequest(Request $request): UserProtocol {
        $userProtocol = new UserProtocol();
        $fields = [
            [
                'fieldUser' => 'name',
                'functionUser' => 'setName',
                'fieldRequest' => 'name',
                'functionRequest' => "get"
            ],
            [
                'fieldUser' => 'email',
                'functionUser' => 'setEmail',
                'fieldRequest' => 'email',
                'functionRequest' => "get"
            ],
            [
                'fieldUser' => 'password',
                'functionUser' => 'setPassword',
                'fieldRequest' => 'password',
                'functionRequest' => "get"
            ],
            [
                'fieldUser' => 'profile-img',
                'functionUser' => 'setImgPerfil',
                'fieldRequest' => 'profile-img',
                'functionRequest' => "file"
            ],
        ];
        $errors = [];
        foreach($fields as $f) {
            try {
                $fieldValue = $request->{$f['functionRequest']}($f['fieldRequest']);
                $userProtocol->{$f['functionUser']}($fieldValue);
            } catch (\Exception $e) {
                $errors[] = $e->getMessage();
            }
        }

        if(! empty($errors)){
            throw UserProtocolException::multiplesErrors($errors);
        }

        $userProtocol->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);
        return $userProtocol;
    }
}
