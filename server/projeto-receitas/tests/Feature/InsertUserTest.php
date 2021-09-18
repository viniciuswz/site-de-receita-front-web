<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

use App\Libraries\Users\Features\Mocks\InsertUserMock;
use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Exceptions\ExceptionLib\InsertUserException;
use Illuminate\Http\UploadedFile;

class InsertUserTest extends TestCase
{
    protected function createImageFake($type){
        $file = UploadedFile::fake();
        return $file->create('fake_image', 0, $type);
    }

    public function test_param_insert_user_is_type_user_protocol()
    {
        $observer = $this->getMockBuilder(InsertUserMock::class)->getMock();

        $observer->expects($this->once())
                 ->method('insertWithSendEmail')
                 ->with(new UserProtocol());

        $observer->insertWithSendEmail(new UserProtocol());
    }

    public function test_insert_user_returns_exception_because_user_protocol_empty(){
        $this->expectException(InsertUserException::class);
        $this->expectExceptionCode(400);
        $insertUser = new InsertUserMock();
        $userProtocol = new UserProtocol();
        $insertUser->insertWithSendEmail($userProtocol);
    }

    public function test_retuns_exception_because_email_duplicate(){
        $this->expectException(InsertUserException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage("O E-mail informado já existe em nossa base de dados");

        $userProtocol = new UserProtocol();
        $userProtocol->setName(Str::random(10) . ' ' . Str::random(10));
        $userProtocol->setEmail('invalid@valid.com.br');
        $userProtocol->setPassword(Str::random(10));
        $userProtocol->setImgPerfil($this->createImageFake('image/png'));
        $userProtocol->setImgCapa($this->createImageFake('image/png'));
        $userProtocol->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);

        $insertUser = new InsertUserMock();
        $insertUser->insertWithSendEmail($userProtocol);
        $insertUser->insertWithSendEmail($userProtocol);
    }

    public function test_return_id_user_insert_user()
    {
        $insertUser = new InsertUserMock();
        $userProtocol = new UserProtocol();
        $userProtocol->setName(Str::random(10) . ' ' . Str::random(10));
        $userProtocol->setEmail('email@valid.com.br');
        $userProtocol->setPassword(Str::random(10));
        $userProtocol->setImgPerfil($this->createImageFake('image/png'));
        $userProtocol->setImgCapa($this->createImageFake('image/png'));
        $userProtocol->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);

        $this->assertIsInt($insertUser->insertWithSendEmail($userProtocol));
    }
}
