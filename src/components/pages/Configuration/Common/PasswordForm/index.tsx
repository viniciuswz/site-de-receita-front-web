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
  Grid,
} from './styles';

const PasswordForm: React.FC = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          password: Yup.string()
            .required('O campo é obrigatorio')
            .min(8, 'Precisa ter pelo menos 8 caracteres'),
          newPassword: Yup.string()
            .required('O campo é obrigatorio')
            .min(8, 'Precisa ter pelo menos 8 caracteres'),
          confirmNewPassword: Yup.string()
            .min(8, 'Precisa ter pelo menos 8 caracteres')
            .oneOf([Yup.ref('newPassword'), null], 'As senhas não são iguais'),
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
        <Grid>
          <div className="item-100">
            <DefaultInput labelName="Senha atual" name="password" />
          </div>
          <div className="item-100">
            <DefaultInput labelName="Nova senha" name="newPassword" />
          </div>
          <div className="item-100">
            <DefaultInput
              labelName="Confirmar senha"
              name="confirmNewPassword"
            />
          </div>
        </Grid>
        <ButtonContainer>
          <ButtonReset>Redefinir</ButtonReset>
          <ButtonSubmit>confirmar edição</ButtonSubmit>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default PasswordForm;
