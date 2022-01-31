<?php

namespace App\Libraries\Utilities\Upload;

use Illuminate\Http\UploadedFile;

use App\Libraries\Utilities\Upload\UploadFile;

class UploadImgUser implements UploadFile
{

    protected $nameStoreDiretorio;

    public function __construct($file, $nameStoreDiretorio)
    {
        $this->file = $file;
        $this->nameStoreDiretorio = $nameStoreDiretorio;
    }

    public function store(): ?string
    {
        if(! $this->validateType()) return null;
        return $this->file->store($this->nameStoreDiretorio);
    }

    public function validateType(): bool {
        try {
            $extensaoAceitas = ['png', 'jpg', 'jpeg'];
            return in_array($this->file->extension(), $extensaoAceitas);
        } catch (\Exception $e) {
            return false;
        }
    }
}


