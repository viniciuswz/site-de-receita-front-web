import {
  Container,
  ContainerLeft,
  ContainerRight,
  ContainerCenter,
} from './style';

import { Cover, ProfileInfoBox, Shelf } from './components';

const Profile: React.FC = () => {
  return (
    <Container>
      <ContainerCenter>
        <Cover />
      </ContainerCenter>
      <ContainerLeft>
        <ProfileInfoBox />
      </ContainerLeft>
      <ContainerRight>
        <Shelf />
      </ContainerRight>
    </Container>
  );
};

export default Profile;
