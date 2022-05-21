import { FaCamera } from 'react-icons/fa';
import { CoverContainer, ToggleCoverButton } from './styles';

const Cover: React.FC = () => {
  return (
    <CoverContainer>
      <img src="/images/cover.jpg" alt="" />
      <ToggleCoverButton>
        <FaCamera />
      </ToggleCoverButton>
    </CoverContainer>
  );
};

export default Cover;
