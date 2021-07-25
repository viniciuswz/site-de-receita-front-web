<?php

namespace App\Libraries\Users\Protocols;

use Illuminate\Support\Facades\Hash;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use App\Libraries\Utilities\ValidationLib;

class UserProtocol
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

    public function setImgPerfil($imgPerfil){
        $imgPerfil = ValidationLib::sanitizarString(trim($imgPerfil));
        $this->imgPerfil = $imgPerfil;
    }

    public function setImgCapa($imgCapa){
        $imgCapa = ValidationLib::sanitizarString(trim($imgCapa));
        $this->imgCapa = $imgCapa;
    }

    public function setTipoUsuarioId($id){
        if(! ValidationLib::validNumber($id)){
            throw UserProtocolException::invalidIdTipoUsuario();
        }
        $this->tipoUsuarioId = $id;;
    }
}


