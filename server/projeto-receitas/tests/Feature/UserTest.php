<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Libraries\Users\UserLib;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Features\Mocks\InsertUserMock;
use Illuminate\Support\Str;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_return_id_user_insert_user()
    {
        $user = new UserLib();
        $userProtocol = new UserProtocol();
        $userProtocol->setName(Str::random(10) . ' ' . Str::random(10));
        $userProtocol->setEmail('email@valid.com.br');
        $userProtocol->setPassword(Str::random(10));
        $userProtocol->setImgPerfil(Str::random(10));
        $userProtocol->setImgCapa(Str::random(10));
        $userProtocol->setTipoUsuarioId(1);
        $insert = new InsertUserMock();
        $this->assertIsInt($user->insertWithSendEmail($userProtocol, $insert));
    }

    public function test_param_insert_user_is_type_user_protocol()
    {

        $observer = $this->getMockBuilder(UserLib::class)->getMock();

        $observer->expects($this->once())
                 ->method('insertWithSendEmail')
                 ->with(new UserProtocol());
        $insert = new InsertUserMock();
        $observer->insertWithSendEmail(new UserProtocol(), $insert);
    }
}
