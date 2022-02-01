<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Http\Request;

use App\Libraries\Users\Exceptions\UserException;
use App\Libraries\Users\Factories\InsertUserFactory;
use App\Libraries\Users\Protocols\UserProtocol;

class InsertUserFactoryTest extends TestCase
{
    public function test_throw_exception_empty_fields()
    {
        $this->expectException(UserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage(utf8_encode('["O nome informado n\u00e3o possui sobrenome","O e-mail informado \u00e9 inv\u00e1lido","A senha \u00e9 obrigat\u00f3ria"]'));

        $mockRequest = Request::create('/api/v1/user', 'POST');
        InsertUserFactory::createUserProtocolByRequest($mockRequest);
    }

    public function test_throw_exception_only_password()
    {
        $this->expectException(UserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage('["O nome informado n\u00e3o possui sobrenome","O e-mail informado \u00e9 inv\u00e1lido"]');

        $mockRequest = Request::create('/api/v1/user', 'POST', [
            'password' => 'any_password'
        ]);
        InsertUserFactory::createUserProtocolByRequest($mockRequest);
    }

    public function test_returns_user_protocol_class_factory_by_request()
    {
        $mockRequest = Request::create('/api/v1/user', 'POST', [
            'password' => 'any_password',
            'name' => 'any any',
            'email' => 'any@any.com'
        ]);
        $user = InsertUserFactory::createUserProtocolByRequest($mockRequest);
        $this->assertInstanceOf(UserProtocol::class, $user);
    }
}
