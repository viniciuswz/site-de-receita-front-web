<?php

namespace App\Libraries\Users\Features\Mocks;

use App\Libraries\Users\Features\InsertUser;
use App\Libraries\Users\Protocols\UserProtocol;

class InsertUserMock extends InsertUser
{

    protected function insertUserAndReturnIdUser(UserProtocol $userProtocol): int
    {
        return 1;
    }

    protected function consultarIsUniqueEmail(string $email): bool
    {
        if($email == 'email@valid.com.br'){
            return true;
        }
        return false;
    }
}


