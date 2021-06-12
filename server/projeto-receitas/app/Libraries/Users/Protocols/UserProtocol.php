<?php

namespace App\Libraries\Users\Protocols;

class UserProtocol
{
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
        return $this->nome = $name;
    }
    public function setEmail($email){
        return $this->email = $email;
    }
    public function setPassword($password){
        return $this->password = $password;
    }
    public function setImgPerfil($imgPerfil){
        return $this->imgPerfil = $imgPerfil;
    }
    public function setImgCapa($imgCapa){
        return $this->imgCapa = $imgCapa;
    }
    public function setTipoUsuarioId($id){
        return $this->tipoUsuarioId = $id;;
    }
}


