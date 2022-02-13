<?php

namespace App\Libraries\Users\Features\Protocol;
use App\Libraries\Users\Protocols\UserProtocol;

Interface InserUserProtocol {
    public function insertWithSendEmail(UserProtocol $userProtocol): int;

    public function consultarIsUniqueEmail(string $email);
}
