import { Container } from '@/styles/Receita';

import { useRouter } from 'next/router';
import Header from '@/components/commom/Header';

const Login: React.FunctionComponent = () => {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      <Header />
      <Container>
        olá página de receita:
        <br /> {slug}
      </Container>
    </>
  );
};

export default Login;
