import { Container, LeftSide, RightSide } from '@/styles/Login';
import LoginForm from '../../components/commom/Welcome/LoginForm';

const Login: React.FunctionComponent = () => {
  return (
    <Container>
      <LeftSide>
        <img
          className="logo"
          src="/images/login_logo_light.svg"
          alt="logo daora"
        />
        <img className="chef" src="/images/login_chef.svg" alt="chef draw" />
      </LeftSide>

      <RightSide>
        <LoginForm />
      </RightSide>
    </Container>
  );
};

export default Login;
