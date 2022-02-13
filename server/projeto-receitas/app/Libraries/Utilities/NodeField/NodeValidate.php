<?php

namespace App\Libraries\Utilities\NodeField;

class NodeValidate
{

    private ValidateRequest $validateRequest;
    private string $fieldProtocol;
    private string $funcProtocol;
    private string $fieldRequest;
    private string $funcRequest;

    public function __construct(
        ValidateRequest $validateRequest,
        string $fieldProtocol,
        string $funcProtocol,
        string $fieldRequest,
        string $funcRequest
    )
    {
        $this->validateRequest = $validateRequest;
        $this->fieldProtocol = $fieldProtocol;
        $this->funcProtocol = $funcProtocol;
        $this->fieldRequest = $fieldRequest;
        $this->funcRequest = $funcRequest;
    }

    public function validate(): bool{
        $request = $this->validateRequest->getRequest();
        $protocol = $this->validateRequest->getProtocol();
        try {
            $fieldValue = $request->{$this->funcRequest}($this->fieldRequest);
            $protocol->{$this->funcProtocol}($fieldValue);
            return true;
        } catch (\Exception $e) {
            $this->validateRequest->addError($e->getMessage());
        } catch (\Throwable $e) {
            // TO DO LOGAR
        }
        return false;
    }
}


