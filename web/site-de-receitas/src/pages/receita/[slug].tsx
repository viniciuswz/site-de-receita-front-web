import { Container } from '@/styles/Receita';

import { useRouter } from 'next/router';
import HeaderResponsive from '@/components/commom/HeaderResponsive';

const Login: React.FunctionComponent = () => {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      <HeaderResponsive />
      <Container>
        olá página de receita:
        <br /> {slug}
      </Container>
    </>
  );
};

export default Login;
