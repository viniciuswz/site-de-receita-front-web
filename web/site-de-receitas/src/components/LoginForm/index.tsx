import { useCallback, useRef } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';

import getValidationErrors from 'src/utils/getValidationErrors';
import {
  Container,
  FormBottom,
  ButtonSubmit,
  ButtonLogInFacebook,
} from './styles';

import LoginInput from './Components/LoginInput';
import LoginInputCheckbox from './Components/LoginInputCheckbox';

const LoginForm: React.FC = () => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const handleFormSubmit = useCallback(async data => {
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
  }, []);
  return (
    <Container>
      <Form onSubmit={handleFormSubmit} ref={formRef}>
        <h1>Fazer Login</h1>
        <LoginInput
          name="email"
          id="e-mail"
          position="top"
          type="e-mail"
          labelName="E-mail"
        />
        <LoginInput
          name="password"
          id="password"
          position="bottom"
          type="password"
          labelName="Senha"
        />
        <FormBottom>
          <LoginInputCheckbox />
          <a href="#forget">Esqueci a senha</a>
        </FormBottom>
        <ButtonSubmit type="submit">Entrar</ButtonSubmit>
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
          <button
            type="button"
            onClick={() => {
              addToast({
                title: 'Não tem essa página',
                description: 'Para de tentar carai',
                type: 'info',
              });
            }}
          >
            Cadastre-se
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
