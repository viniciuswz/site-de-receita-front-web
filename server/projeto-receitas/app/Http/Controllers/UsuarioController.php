<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Libraries\Users\UserLib;
use App\Libraries\Users\Features\InsertUser;
use App\Libraries\Users\Exceptions\UserException;
use App\Libraries\Users\Factories\InsertUserFactory;

class UsuarioController extends Controller
{
    public function insert(Request $request)
    {
        try {
            $userProtocol = InsertUserFactory::createUserProtocolByRequest($request);
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
        } catch (\Exception $e) {
            return response([
                'status' => false,
                'response' => 'Server Error'
            ], 500);
        }
    }
}
