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
  StepIndicator,
} from '../../styles';

import Input from '../../../Input';
import { StepType } from '../..';

interface StepOneProps {
  changeStep(step: StepType): void;
}

const StepOne: React.FC<StepOneProps> = ({ changeStep }) => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);

  const [isValidform, setIsValidform] = useState(false);
  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          firstName: Yup.string().required('O campo é obrigatorio'),
          lastName: Yup.string().required('O campo é obrigatorio'),
          email: Yup.string()
            .email('Você precisa inserir um e-mail válido')
            .required('O campo é obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });

        changeStep('two');
        console.log(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Validation failed
          const errors = getValidationErrors(error);

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
        <h1>Cadastre-se</h1>

        <Input
          name="firstName"
          id="firstName"
          position="top"
          type="text"
          labelName="Nome"
        />
        <Input
          name="lastName"
          id="lastName"
          position="middle"
          type="text"
          labelName="Sobrenome"
        />
        <Input
          name="email"
          id="e-mail"
          position="bottom"
          type="e-mail"
          labelName="E-mail"
        />

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
          <p>Já tem conta ?</p>
          <Link href="/login">Faça login</Link>
        </div>
      </Form>
    </Container>
  );
};

export default StepOne;
