<?php

namespace App\Http\Controllers;

use App\Libraries\Users\Exceptions\UserException;
use App\Libraries\Users\Factories\LoginUserFactory;
use Illuminate\Http\Request;

class UserAuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $userProtocol = LoginUserFactory::createUserProtocolByRequest($request);
            $token = auth('api')->attempt([
                'email' => $userProtocol->getEmail(),
                'password' => $userProtocol->getPassword()
            ]);
            if ($token) {
                return response()->json([
                    'status' => true,
                    'response' => [
                        'token' => $token
                    ]
                ]);
            }
            return response()->json([
                'status' => false,
                'response' => 'Usuário ou senha inválido'
            ], 403);
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

    public function logout()
    {
        try {
            auth('api')->logout();
            return \response()->json([
                'status' => true,
                'response' => "Token desativado"
            ]);
        } catch (\Exception $e) {
            return response([
                'status' => false,
                'response' => 'Server Error'
            ], 500);
        }
    }

    public function me()
    {
        return response()->json(auth()->user());
    }
}
