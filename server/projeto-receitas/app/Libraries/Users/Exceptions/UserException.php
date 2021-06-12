<?php

namespace App\Libraries\Users\Exceptions;

use App\Models\User;

class UserException extends \Exception
{
    public function __construct($message, $errorCode) {
        parent::__construct($message, $errorCode);
    }
}


