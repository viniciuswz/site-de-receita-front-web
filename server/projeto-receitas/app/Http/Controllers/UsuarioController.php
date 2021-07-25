<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Users\UserLib;
use App\Libraries\Users\Features\InsertUser;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Exceptions\UserException;

class UsuarioController extends Controller
{
    public function insert(Request $request) {
        try {
            $userProtocol = new UserProtocol();
            $userProtocol->setName($request->get('name'));
            $userProtocol->setEmail($request->get('email'));
            $userProtocol->setPassword($request->get('password'));
            $userProtocol->setImgPerfil('imagem');
            $userProtocol->setImgCapa('imagem');
            $userProtocol->setTipoUsuarioId(1);

            $userLib = new UserLib();
            $userLib->insertWithSendEmail($userProtocol, new InsertUser());
            return response([
                'status' => true,
                'response' => 'OK'
            ], 200);
        } catch (UserException $usu) {
            return response([
                'status' => false,
                'response' => $usu->getMessage()
            ], 202);
        } catch (Exception $usu) {
            return response([
                'status' => false,
                'response' => 'Server Error'
            ], 500);
        }
    }
}


