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

const GeneralInfoForm: React.FC = () => {
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          name: Yup.string().required('O campo é obrigatorio'),
          lastname: Yup.string().required('O campo é obrigatorio'),
          email: Yup.string()
            .email('E-mail inválido')
            .required('O campo é obrigatorio'),
          bio: Yup.string().required('O campo é obrigatorio'),
          country: Yup.string().required('O campo é obrigatorio'),
          state: Yup.string().required('O campo é obrigatorio'),
          city: Yup.string().required('O campo é obrigatorio'),
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
          <div className="item-50">
            <DefaultInput labelName="Nome" name="name" />
          </div>
          <div className="item-50">
            <DefaultInput labelName="Sobrenome" name="lastname" />
          </div>
          <div className="item-100">
            <DefaultInput labelName="E-mail" name="email" />
          </div>
          <div className="item-100">
            <DefaultInput labelName="Bio" name="bio" />
          </div>
        </Grid>

        <h2>Localização</h2>
        <Grid>
          <div className="item-50">
            <DefaultInput labelName="País" name="country" />
          </div>
          <div className="item-50">
            <DefaultInput labelName="Estado" name="state" />
          </div>
          <div className="item-50">
            <DefaultInput labelName="Cidade" name="city" />
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

export default GeneralInfoForm;
