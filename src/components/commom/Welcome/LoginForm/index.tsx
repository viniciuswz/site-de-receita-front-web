import { useCallback, useRef, useState } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';

import Link from 'next/link';

import getValidationErrors from 'src/utils/getValidationErrors';
import {
  Container,
  FormBottom,
  ButtonSubmit,
  ButtonLogInFacebook,
} from './styles';

import Input from '../Input';
import InputCheckbox from '../InputCheckbox';

const LoginForm: React.FC = () => {
  const { addToast } = useToast();
  const [isValidform, setIsValidform] = useState(false);

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
  const handleValidateChangesOnForm = useCallback(() => {
    const hasErrors = formRef.current?.getErrors();
    const formData = formRef.current?.getData();

    console.log(hasErrors);

    if (formData !== undefined) {
      const data = Object.values(formData);
      const hasAllFieldFilled = data.every(value => !!value);
      setIsValidform(hasAllFieldFilled);
    }
  }, []);
  return (
    <Container>
      <Form
        onSubmit={handleFormSubmit}
        onChange={handleValidateChangesOnForm}
        ref={formRef}
      >
        <h1>Fazer Login</h1>
        <Input
          name="email"
          id="e-mail"
          position="top"
          type="e-mail"
          labelName="E-mail"
        />
        <Input
          name="password"
          id="password"
          position="bottom"
          type="password"
          labelName="Senha"
        />
        <FormBottom>
          <InputCheckbox />
          <a href="#forget">Esqueci a senha</a>
        </FormBottom>
        <ButtonSubmit type="submit" isValidForm={isValidform}>
          Entrar
        </ButtonSubmit>
        <div className="or">
          <p>ou</p>
        </div>
        <ButtonLogInFacebook
          type="button"
          onClick={() => {
            addToast({
              title: 'some daqui meo',
              description: 'Para de tentar carai',
              type: 'error',
            });
          }}
        >
          <span>
            <img
              className="logo"
              src="/images/facebook_icon_24.svg"
              alt="logo daora"
            />
            Entrar com o Facebook
          </span>
        </ButtonLogInFacebook>
        <div className="without-account">
          <p>Não tem conta ?</p>
          <Link href="/cadastro">Cadastre-se</Link>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
