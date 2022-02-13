<?php

namespace App\Libraries\Utilities;


class ValidationLib
{
    public static function validEmail(string $email): bool
    {
        return filter_var($email, FILTER_VALIDATE_EMAIL);
    }

    public static function validNumber(string $num): bool
    {
        return filter_var($num, FILTER_VALIDATE_INT);
    }

    public static function sanitizarString(string $texto): string {
        return filter_var($texto, FILTER_SANITIZE_STRING);
    }
}


