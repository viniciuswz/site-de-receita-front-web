import {
  Container,
  Form,
  FormBottom,
  ButtonSubmit,
  ButtonLogInFacebook,
} from './styles';

import LoginInput from './Components/LoginInput';
import LoginInputCheckbox from './Components/LoginInputCheckbox';

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Fazer Login</h1>
        <LoginInput name="E-mail" id="e-mail" position="top" type="text" />
        <LoginInput
          name="Senha"
          id="password"
          position="bottom"
          type="password"
        />
        <FormBottom>
          <LoginInputCheckbox />
          <a href="#forget">Esqueci a senha</a>
        </FormBottom>
        <ButtonSubmit>Entrar</ButtonSubmit>
        <div className="or">
          <p>ou</p>
        </div>
        <ButtonLogInFacebook>
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
          <button type="button">Cadastre-se</button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
