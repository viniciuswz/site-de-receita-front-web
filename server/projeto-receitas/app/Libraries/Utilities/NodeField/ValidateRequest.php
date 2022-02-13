<?php

namespace App\Libraries\Utilities\NodeField;

use App\Libraries\Utilities\Interfaces\ProtocolPassingParamets;
use Illuminate\Http\Request;

class ValidateRequest
{

    private ProtocolPassingParamets $protocol;
    private Request $request;
    private array $errosValidate = [];
    private array $listNodeValidates = [];

    public function __construct(ProtocolPassingParamets $protocol, Request $request)
    {
        $this->protocol = $protocol;
        $this->request = $request;
    }

    public static function createNodeValidate(ValidateRequest $validate, string $fieldProtocol, string $funcProtocol, string $fieldRequest, string $funcRequest): NodeValidate
    {
        $node = new NodeValidate($validate, $fieldProtocol, $funcProtocol, $fieldRequest, $funcRequest);
        $validate->addValidate($node);
        return $node;
    }

    public function validate(): bool
    {
        foreach ($this->listNodeValidates as $node) {
            $node->validate();
        }
        return count($this->getErrors()) <= 0;
    }

    public function addError($string): void
    {
        $this->errosValidate[] = $string;
    }

    private function addValidate(NodeValidate $node): void
    {
        $this->listNodeValidates[] = $node;
    }

    public function getErrors(): array
    {
        return $this->errosValidate;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    public function getProtocol(): ProtocolPassingParamets
    {
        return $this->protocol;
    }
}
