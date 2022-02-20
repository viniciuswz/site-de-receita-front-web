import { Container } from '@/styles/Receita';

import { useRouter } from 'next/router';
import Header from '@/components/commom/Header';
import HeaderMobile from '@/components/commom/HeaderMobile';

const Login: React.FunctionComponent = () => {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      <HeaderMobile />
      <Container>
        olá página de receita:
        <br /> {slug}
      </Container>
    </>
  );
};

export default Login;
