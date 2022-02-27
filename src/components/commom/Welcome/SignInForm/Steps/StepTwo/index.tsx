import { useCallback, useRef, useState } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';

import Link from 'next/link';

import getValidationErrors from 'src/utils/getValidationErrors';
import StepOneIcon from '@/assets/images/signIn_step_one_icon.svg';
import StepTwoIcon from '@/assets/images/signIn_step_two_icon.svg';
import {
  Container,
  ButtonSubmit,
  ButtonLogInFacebook,
  StepIndicator,
} from '../../styles';
import Input from '../../../Input';
import { StepType } from '../..';

import IframeYt from './YoutubeIframe';

interface StepTwoProps {
  changeStep(step: StepType): void;
}

const StepTwo: React.FC<StepTwoProps> = ({ changeStep }) => {
  const { addToast } = useToast();
  const formRef = useRef<FormHandles>(null);
  const [endStep, setEndStep] = useState(false);

  const [isValidform, setIsValidform] = useState(false);
  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          password: Yup.string()
            .required('O campo é obrigatorio')
            .min(8, 'Precisa ter pelo menos 8 caracteres'),
          passwordConfirm: Yup.string()
            .min(8, 'Precisa ter pelo menos 8 caracteres')
            .oneOf([Yup.ref('password'), null], 'As senhas não são iguais'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });

        // window.location.href = 'https://www.youtube.com/watch?v=qYsJ9KX877Y';
        setEndStep(true);

        // changeStep('two');
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
        <StepIndicator className="two">
          <StepOneIcon />
          <div className="separator" />
          <StepTwoIcon />
        </StepIndicator>
        <Input
          name="password"
          id="password"
          position="top"
          type="password"
          labelName="Senha"
        />
        <Input
          name="passwordConfirm"
          id="passwordConfirm"
          position="bottom"
          type="password"
          labelName="Confirmar senha"
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
      {endStep && <IframeYt />}
    </Container>
  );
};

export default StepTwo;
