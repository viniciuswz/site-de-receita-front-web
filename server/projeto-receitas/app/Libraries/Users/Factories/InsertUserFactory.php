<?php

namespace App\Libraries\Users\Factories;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Utilities\NodeField\ValidateRequest;
use Illuminate\Http\Request;

class InsertUserFactory
{
    public static function createUserProtocolByRequest(Request $request): UserProtocol {
        $userProtocol = new UserProtocol();
        $validateRequest = new ValidateRequest($userProtocol, $request);
        $validateRequest::createNodeValidate($validateRequest, 'name', 'setName', 'name', 'get');
        $validateRequest::createNodeValidate($validateRequest, 'email', 'setEmail', 'email', 'get');
        $validateRequest::createNodeValidate($validateRequest, 'password', 'setPassword', 'password', 'get');
        $validateRequest::createNodeValidate($validateRequest, 'profile-img', 'setImgPerfil', 'profile-img', 'file');

        if(! $validateRequest->validate()){
            throw UserProtocolException::multiplesErrors($validateRequest->getErrors());
        }

        $userProtocol->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);
        return $userProtocol;
    }
}
