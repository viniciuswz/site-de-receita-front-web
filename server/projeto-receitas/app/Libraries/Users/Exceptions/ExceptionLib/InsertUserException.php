<?php

namespace App\Libraries\Users\Exceptions\ExceptionLib;
use App\Libraries\Users\Exceptions\UserException;

class InsertUserException extends UserException
{
    public function __construct($message, $errorCode) {
        parent::__construct($message, $errorCode);
    }

    public static function insertUserColumnsEmpty(array $fieldsError){
        return new self(json_encode($fieldsError), 400);
	}

    public static function emailNotUnique(){
        return new self("O E-mail informado já existe em nossa base de dados", 400);
	}

}


