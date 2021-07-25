<?php

namespace App\Libraries\Users;

use App\Libraries\Users\Features\InsertUser;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Models\User;

class UserLib
{
    public function insertWithSendEmail(UserProtocol $user, InsertUser $insert): int
    {
        return $insert->insertWithSendEmail($user);
    }
}


