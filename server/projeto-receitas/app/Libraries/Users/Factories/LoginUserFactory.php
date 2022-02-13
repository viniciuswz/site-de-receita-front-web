<?php

namespace App\Libraries\Users\Factories;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Utilities\NodeField\ValidateRequest;
use Illuminate\Http\Request;

class LoginUserFactory
{
    public static function createUserProtocolByRequest(Request $request): UserProtocol
    {
        $userProtocol = new UserProtocol();
        $userProtocol->setIsEncryptPassword(false);
        $validateRequest = new ValidateRequest($userProtocol, $request);
        $validateRequest::createNodeValidate($validateRequest, 'email', 'setEmail', 'email', 'get');
        $validateRequest::createNodeValidate($validateRequest, 'password', 'setPassword', 'password', 'get');

        if (!$validateRequest->validate()) {
            throw UserProtocolException::multiplesErrors($validateRequest->getErrors());
        }

        return $userProtocol;
    }
}
