import { BiSearch } from 'react-icons/bi';
import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import { Container, InputContainer, BackgroundOverlay } from './styles';

const Search: React.FC = () => {
  const { isSearchOpen, toggleIsSearchOpen } = useHeaderMobileNavigation();
  return (
    <>
      {isSearchOpen && (
        <>
          <Container>
            <InputContainer>
              <input
                type="text"
                placeholder="O que você quer preparar hoje ?"
              />
              <button type="button">
                <BiSearch size={24} color="#707070" />
              </button>
            </InputContainer>
          </Container>
          <BackgroundOverlay onClick={toggleIsSearchOpen} />
        </>
      )}
    </>
  );
};

export default Search;
