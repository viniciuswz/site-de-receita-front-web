<?php

namespace App\Libraries\Utilities\Upload;

use Illuminate\Http\UploadedFile;

use App\Libraries\Utilities\Upload\UploadFile;

class UploadImgUser implements UploadFile
{

    protected $nameStoreDiretorio;

    public function __construct($file, $nameStoreDiretorio = 'user-perfil')
    {
        $this->file = $file;
        $this->nameStoreDiretorio = $nameStoreDiretorio;
    }

    public function store(): string
    {
        if(! $this->validateType()) return null;
        return $this->file->store($this->nameStoreDiretorio);
    }

    public function validateType(): bool {
        $extensaoAceitas = ['png', 'jpg', 'jpeg'];
        return in_array($this->file->extension(), $extensaoAceitas);
    }
}


