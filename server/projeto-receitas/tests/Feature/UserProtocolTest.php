<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;

class UserProtocolTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_set_name_and_returns_name()
    {
        $nome = 'Daniel Teste';
        $user = new UserProtocol();
        $user->setName($nome);

        $this->assertEquals($nome, $user->getName());
    }

    public function test_set_name_with_spaces_and_returns_name_without_spaces()
    {
        $nome = ' Daniel Teste ';
        $user = new UserProtocol();
        $user->setName($nome);

        $this->assertEquals(trim($nome), $user->getName());
    }

    public function test_set_name_just_first_name_returns_exception()
    {
        $this->expectException(UserProtocolException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage("O nome informado não possui sobrenome");

        $nome = ' Daniel ';
        $user = new UserProtocol();
        $user->setName($nome);
    }

    public function test_set_email_and_returns_email()
    {
        $email = 'any_valid@valid.com';
        $user = new UserProtocol();
        $user->setEmail($email);

        $this->assertEquals($email, $user->getEmail());
    }

    public function test_set_email_with_spaces_and_returns_email_without_spaces()
    {
        $email = ' any_valid@valid.com ';
        $user = new UserProtocol();
        $user->setEmail($email);

        $this->assertEquals(trim($email), $user->getEmail());
    }

    public function test_set_email_invalid_returns_exception()
    {
        $this->expectException(UserProtocolException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage("O e-mail informado é inválido");

        $email = 'testar.com';
        $user = new UserProtocol();
        $user->setEmail($email);
    }

    public function test_create_hash_password_user()
    {
        $pass = 'testpassword';
        $user = new UserProtocol();
        $user->setPassword($pass);

        $this->assertNotEquals($pass, $user->getPassword());
    }

    public function test_check_if_passoword_created_hash_expected()
    {
        $pass = 'testpassword';
        $user = new UserProtocol();
        $user->setPassword($pass);

        $hash = Hash::make($pass);
        $this->assertTrue(Hash::check($pass, $hash));
    }

    public function test_set_empty_passoword_returns_exception()
    {
        $this->expectException(UserProtocolException::class);
        $this->expectExceptionCode(400);
        $this->expectExceptionMessage("A senha é obrigatória");

        $pass = '';
        $user = new UserProtocol();
        $user->setPassword($pass);
    }

    public function test_set_tipo_usuario_and_returns_tipo_usuario()
    {
        $tipo = 3;
        $user = new UserProtocol();
        $user->setTipoUsuarioId(UserProtocol::$TIPO_USUARIO_COMUM);

        $this->assertEquals($tipo, $user->getTipoUsuarioId());
    }
}
