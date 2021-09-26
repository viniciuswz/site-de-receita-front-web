import { Container, LeftSide, RightSide } from '../styles/pages/Login';
import LoginForm from '../components/LoginForm';
import drawChef from '../../public/images/login_chef.svg';

const Login: React.FC = () => {
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
