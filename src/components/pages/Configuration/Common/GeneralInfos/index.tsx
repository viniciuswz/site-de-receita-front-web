import { useCallback, useRef, useState } from 'react';

import DefaultInput from '@/components/common/DefaultInput';
import { useToast } from '@/hooks/Toast';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from 'src/utils/getValidationErrors';

import {
  Container,
  ButtonContainer,
  ButtonSubmit,
  ButtonReset,
} from './styles';

const GeneralInfos: React.FC = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          email: Yup.string()
            .email('Você precisa inserir um e-mail válido')
            .required('O campo é obrigatorio'),
          password: Yup.string().required('O campo é obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });
        console.log(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Validation failed
          console.log(data);

          const errors = getValidationErrors(error);

          console.dir(errors);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [addToast]
  );
  return (
    <Container>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Informações da conta</h1>

        <DefaultInput labelName="teste" name="teste" />
        <ButtonContainer>
          <ButtonReset>Redefinir</ButtonReset>
          <ButtonSubmit>confirmar edição</ButtonSubmit>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default GeneralInfos;
