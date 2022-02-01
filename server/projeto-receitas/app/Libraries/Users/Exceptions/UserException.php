<?php

namespace App\Libraries\Users\Exceptions;

use App\Models\User;

class UserException extends \Exception
{
    public function __construct($message, $errorCode) {
        parent::__construct($message, $errorCode);
    }

    public static function multiplesErrors(array $fieldsError, $status = 400){
        return new self(json_encode($fieldsError), $status);
	}
}


