import { Container } from '@/styles/Receita';

import { useRouter } from 'next/router';
import HeaderResponsive from '@/components/common/HeaderResponsive';
import RecipePage from '@/components/pages/Recipe';

const Receita: React.FunctionComponent = () => {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      <HeaderResponsive />
      <Container>
        olá página de receita:
        <br /> {slug}
        <RecipePage />
      </Container>
    </>
  );
};

export default Receita;
