<?php

namespace App\Libraries\Users\Exceptions\ExceptionLib;
use App\Libraries\Users\Exceptions\UserException;

class UserProtocolException extends UserException
{
    public function __construct($message, $errorCode) {
        parent::__construct($message, $errorCode);
    }

    public static function nameWithoutLastName(){
        return new self("O nome informado não possui sobrenome", 400);
	}

    public static function invalidEmail(){
        return new self("O e-mail informado é inválido", 400);
	}

    public static function passwordEmpty(){
        return new self("A senha é obrigatória", 400);
	}

    public static function invalidIdTipoUsuario(){
        return new self("Tipo Usuário inválido", 400);
	}

}


