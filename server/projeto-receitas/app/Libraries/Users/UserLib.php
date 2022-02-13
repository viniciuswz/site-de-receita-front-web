<?php

namespace App\Libraries\Users;

use App\Libraries\Users\Features\Protocol\InserUserProtocol;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Models\User;

class UserLib
{
    public function insertWithSendEmail(UserProtocol $user, InserUserProtocol $insert): int
    {
        return $insert->insertWithSendEmail($user);
    }
}


