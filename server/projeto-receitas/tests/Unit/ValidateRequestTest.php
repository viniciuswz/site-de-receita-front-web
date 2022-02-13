<?php

namespace Tests\Feature;

use App\Libraries\Users\Exceptions\ExceptionLib\UserProtocolException;
use Tests\TestCase;
use Illuminate\Http\Request;

use App\Libraries\Users\Protocols\UserProtocol;
use App\Libraries\Utilities\NodeField\NodeValidate;
use App\Libraries\Utilities\NodeField\ValidateRequest;

class ValidateRequestTest extends TestCase
{
    protected function createMockRequestFields($fields = [
        'password' => 'any_password'
    ])
    {
        return Request::create('/api/v1/user', 'POST', $fields);
    }

    public function test_create_node_validation()
    {
        $userProtocol = new UserProtocol();
        $mockRequest = $this->createMockRequestFields();
        $validate = new ValidateRequest($userProtocol, $mockRequest);
        $this->assertInstanceOf(NodeValidate::class, ValidateRequest::createNodeValidate($validate, 'password', 'setPassword', 'password', 'get'));
    }

    public function test_success_validation()
    {
        $userProtocol = new UserProtocol();
        $mockRequest = $this->createMockRequestFields([
            'password' => 'any_password'
        ]);
        $validate = new ValidateRequest($userProtocol, $mockRequest);
        $node = ValidateRequest::createNodeValidate($validate, 'password', 'setPassword', 'password', 'get');
        $this->assertTrue($node->validate());
    }

    public function test_failed_validation()
    {
        $userProtocol = new UserProtocol();
        $mockRequest = $this->createMockRequestFields([
            'password' => ''
        ]);
        $validate = new ValidateRequest($userProtocol, $mockRequest);
        $node = ValidateRequest::createNodeValidate($validate, 'password', 'setPassword', 'password', 'get');
        $this->assertFalse($node->validate());
    }

    public function test_return_protocol_validate()
    {
        $userProtocol = new UserProtocol();
        $mockRequest = $this->createMockRequestFields();
        $validate = new ValidateRequest($userProtocol, $mockRequest);
        $this->assertInstanceOf(UserProtocol::class, $validate->getProtocol());
    }

    public function test_return_array_with_errors()
    {
        $userProtocol = new UserProtocol();
        $mockRequest = $this->createMockRequestFields([
            'password' => ''
        ]);
        $validate = new ValidateRequest($userProtocol, $mockRequest);
        $node = ValidateRequest::createNodeValidate($validate, 'password', 'setPassword', 'password', 'get');
        $validate->validate();
        $msgError = $validate->getErrors()[0];
        $exception = UserProtocolException::passwordEmpty();
        $this->assertEquals($exception->getMessage(), $msgError);
    }
}
