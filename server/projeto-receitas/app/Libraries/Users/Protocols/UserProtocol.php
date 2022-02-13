<?php

namespace App\Libraries\Users\Protocols;

use Illuminate\Support\Facades\Hash;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use App\Libraries\Utilities\Interfaces\ProtocolPassingParamets;
use App\Libraries\Utilities\ValidationLib;
use App\Libraries\Utilities\Upload\UploadImgUser;

class UserProtocol implements ProtocolPassingParamets
{

    public static $TIPO_USUARIO_COMUM = 3;

    private $id;
    private $nome;
    private $tipoUsuarioId;
    private $password;
    private $email;
    private $imgPerfil;
    private $imgCapa;
    private $statusAtivo;
    private $biografia;

    public function getName(){
        return $this->nome;
    }

    public function getEmail(){
        return $this->email;
    }

    public function getPassword(){
        return $this->password;
    }

    public function getImgPerfil(){
        return $this->imgPerfil;
    }

    public function getImgCapa(){
        return $this->imgCapa;
    }

    public function getTipoUsuarioId(){
        return $this->tipoUsuarioId;
    }

    public function getBiografia(){
        return $this->biografia;
    }

    public function setName($name){
        $name = ValidationLib::sanitizarString(trim($name));
        if(count(explode(' ', $name)) < 2){
            throw UserProtocolException::nameWithoutLastName();
        }
        $this->nome = $name;
    }

    public function setEmail($email){
        $email = trim($email);
        if(!ValidationLib::validEmail($email)){
            throw UserProtocolException::invalidEmail();
        }
        $this->email = $email;
    }

    public function setPassword($password){
        if(empty($password)){
            throw UserProtocolException::passwordEmpty();
        }
        $password = Hash::make($password);
        $this->password = $password;
    }

    public function setImgPerfil($fileImg, $folderImg = 'user-perfil'){
        $upload = new UploadImgUser($fileImg, $folderImg);
        $this->imgPerfil = $upload->store();
    }

    public function setImgCapa($imgCapa, $folderImg = 'user-capa'){
        $upload = new UploadImgUser($imgCapa, $folderImg);
        $this->imgCapa = $upload->store();
    }

    public function setTipoUsuarioId($id){
        if(! ValidationLib::validNumber($id)){
            throw UserProtocolException::invalidIdTipoUsuario();
        }
        $this->tipoUsuarioId = $id;;
    }

    public function setBiografia($biografia){
        $biografia = ValidationLib::sanitizarString(trim($biografia));
        $this->biografia = $biografia;
    }
}


