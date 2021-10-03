import { Container, Form, FormBottom, ButtonSubmit } from './styles';

import LoginInput from './Components/LoginInput';
import LoginInputCheckbox from './Components/LoginInputCheckbox';

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Fazer Login</h1>
        <LoginInput position="top" type="text" />
        <LoginInput position="bottom" type="text" />
        <FormBottom>
          <LoginInputCheckbox />
          <a href="#forget">Esqueci a senha</a>
        </FormBottom>
        <ButtonSubmit>Entrar</ButtonSubmit>
        <div className="or">
          <p>ou</p>
        </div>
      </Form>
    </Container>
  );
};

export default LoginForm;
