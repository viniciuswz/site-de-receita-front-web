import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useTransition } from 'react-spring';

import { Container, Content, Navigation, Header } from './styles';

const MenuCategory: React.FC = () => {
  const { changeStep } = useHeaderMobileNavigation();
  const { currentStep } = useHeaderMobileNavigation();
  const transitions = useTransition(currentStep, {
    from: { left: '-120%', opacity: '0' },
    enter: { left: '0%', opacity: '1' },
    leave: { left: '-120%', opacity: '0' },
    config: {
      duration: 1000,
    },
  });
  return (
    <>
      <Container>
        <Content>
          <Header>
            <BiChevronLeft
              onClick={() => {
                changeStep('initial');
              }}
            />
            <span>Categorias</span>
          </Header>
          <Navigation>
            <ul>
              <li>
                <img src="/images/receitas/default_image.png" alt="food" />
                <span>Categoria</span>
                <BiChevronRight />
              </li>
              <li>
                <img src="/images/receitas/default_image.png" alt="food" />
                <span>Categoria</span>
                <BiChevronRight />
              </li>
            </ul>
          </Navigation>
        </Content>
      </Container>
    </>
  );
};

export default MenuCategory;
