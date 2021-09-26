import { Container, Form } from './styles';

import LoginInput from './Components/LoginInput';

const LoginForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <h1>Fazer Login</h1>
        <LoginInput position="top" />
        <LoginInput position="bottom" />
      </Form>
    </Container>
  );
};

export default LoginForm;
