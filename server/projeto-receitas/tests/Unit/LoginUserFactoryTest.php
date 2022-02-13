<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Request;

use App\Libraries\Users\Exceptions\UserException;
use App\Libraries\Users\Factories\LoginUserFactory;
use App\Libraries\Users\Protocols\UserProtocol;

class LoginUserFactoryTest extends TestCase
{
    public function test_throw_exception_empty_fields()
    {
        $this->expectException(UserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage(utf8_encode('["O e-mail informado \u00e9 inv\u00e1lido","A senha \u00e9 obrigat\u00f3ria"]'));

        $mockRequest = Request::create('api/v1/login', 'POST');
        LoginUserFactory::createUserProtocolByRequest($mockRequest);
    }

    public function test_throw_exception_only_password()
    {
        $this->expectException(UserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage('["O e-mail informado \u00e9 inv\u00e1lido"]');

        $mockRequest = Request::create('api/v1/login', 'POST', [
            'password' => 'any_password'
        ]);
        LoginUserFactory::createUserProtocolByRequest($mockRequest);
    }

    public function test_returns_user_protocol_class_factory_by_request()
    {
        $mockRequest = Request::create('api/v1/login', 'POST', [
            'password' => 'any_password',
            'email' => 'any@any.com'
        ]);
        $user = LoginUserFactory::createUserProtocolByRequest($mockRequest);
        $this->assertInstanceOf(UserProtocol::class, $user);
    }
}
