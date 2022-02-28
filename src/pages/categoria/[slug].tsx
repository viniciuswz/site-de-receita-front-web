import { useRouter } from 'next/router';

import CategoryPage from '@/components/pages/Category';
import HeaderResponsive from '@/components/common/HeaderResponsive';

const Categoria: React.FC = () => {
  const { slug } = useRouter();
  return (
    <>
      <HeaderResponsive />

      <CategoryPage />
    </>
  );
};

export default Categoria;
