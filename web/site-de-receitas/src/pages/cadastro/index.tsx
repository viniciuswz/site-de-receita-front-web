import { Container, LeftSide, RightSide } from '@/styles/Cadastro';
import SignInForm from '../../components/commom/Welcome/SignInForm';

const Cadastro: React.FunctionComponent = () => {
  return (
    <Container>
      <LeftSide>
        <SignInForm />
      </LeftSide>

      <RightSide>
        <img
          className="logo"
          src="/images/login_logo_light.svg"
          alt="logo daora"
        />
        <img className="chef" src="/images/login_chef.svg" alt="chef draw" />
      </RightSide>
    </Container>
  );
};

export default Cadastro;
