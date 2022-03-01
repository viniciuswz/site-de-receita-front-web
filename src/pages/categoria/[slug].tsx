import { useRouter } from 'next/router';

import CategoryPage from '@/components/pages/Category';
import HeaderResponsive from '@/components/common/HeaderResponsive';

const Categoria: React.FC = () => {
  const router = useRouter();

  const { slug } = router.query;
  return (
    <>
      nome da categoria: {slug}
      <HeaderResponsive />
      <CategoryPage />
    </>
  );
};

export default Categoria;
