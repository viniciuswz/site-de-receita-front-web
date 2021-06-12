<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

use App\Libraries\Users\UserLib;
use App\Libraries\Users\Protocols\UserProtocol;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    // public function test_return_user_protocol_insert_user()
    // {
    //     $user = new UserLib();
    //     $userProtocol = new UserProtocol();
    //     $this->assertInstanceOf('\App\Models\User', $user->insertWithSendEmail($userProtocol));
    // }

    // public function test_param_insert_user_is_type_user_protocol()
    // {

    //     $observer = $this->getMockBuilder(UserLib::class)->getMock();

    //     $observer->expects($this->once())
    //              ->method('insertWithSendEmail')
    //              ->with(new UserProtocol());

    //     $observer->insertWithSendEmail(new UserProtocol());
    // }
}
