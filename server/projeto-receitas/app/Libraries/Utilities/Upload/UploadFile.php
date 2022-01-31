<?php

namespace App\Libraries\Utilities\Upload;

Interface UploadFile
{
    public function store(): ?string;
    public function validateType(): bool;
}


