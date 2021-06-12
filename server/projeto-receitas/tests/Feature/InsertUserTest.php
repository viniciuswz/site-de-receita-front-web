<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

use App\Libraries\Users\Features\InsertUser;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Exceptions\ExceptionLib\InsertUserException;

class InsertUserTest extends TestCase
{
    public function test_param_insert_user_is_type_user_protocol()
    {
        $observer = $this->getMockBuilder(InsertUser::class)->getMock();

        $observer->expects($this->once())
                 ->method('insertWithSendEmail')
                 ->with(new UserProtocol());

        $observer->insertWithSendEmail(new UserProtocol());
    }

    public function test_insert_user_returns_exception_because_user_protocol_empty(){
        $this->expectException(InsertUserException::class);
        $this->expectExceptionCode(400);
        $insertUser = new InsertUser();
        $userProtocol = new UserProtocol();
        $insertUser->insertWithSendEmail($userProtocol);
    }

    public function test_retuns_exception_because_email_duplicate(){
        $this->expectException(InsertUserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage("O E-mail informado já existe em nossa base de dados");

        $userProtocol = new UserProtocol();
        $userProtocol->setName(Str::random(10));
        $userProtocol->setEmail(Str::random(10).'@gmail.com');
        $userProtocol->setPassword(Str::random(10));
        $userProtocol->setImgPerfil(Str::random(10));
        $userProtocol->setImgCapa(Str::random(10));
        $userProtocol->setTipoUsuarioId(1);

        $insertUser = new InsertUser();
        $insertUser->insertWithSendEmail($userProtocol);
        $insertUser->insertWithSendEmail($userProtocol);
    }

    public function test_return_user_protocol_insert_user()
    {
        $insertUser = new InsertUser();
        $userProtocol = new UserProtocol();
        $userProtocol->setName(Str::random(10));
        $userProtocol->setEmail(Str::random(10).'@gmail.com');
        $userProtocol->setPassword(Str::random(10));
        $userProtocol->setImgPerfil(Str::random(10));
        $userProtocol->setImgCapa(Str::random(10));
        $userProtocol->setTipoUsuarioId(1);

        $this->assertInstanceOf('\App\Models\User', $insertUser->insertWithSendEmail($userProtocol));
    }
}
