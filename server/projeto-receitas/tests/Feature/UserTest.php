<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

use App\Libraries\Users\UserLib;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Features\Mocks\InsertUserMock;
use Illuminate\Http\UploadedFile;

class UserTest extends TestCase
{
    protected function createImageFake($type){
        $file = UploadedFile::fake();
        return $file->create('fake_image', 0, $type);
    }

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
        $userProtocol->setImgPerfil($this->createImageFake('image/png'), 'user-perfil-test');
        $userProtocol->setImgCapa($this->createImageFake('image/png'), 'user-capa-test');
        $userProtocol->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);
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
