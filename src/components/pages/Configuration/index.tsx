import { Container, ContentLeft, ContentRight } from './styles';

import { Navigation, GeneralInfos } from './Common/index';

const Configuration: React.FC = () => {
  return (
    <Container>
      <ContentLeft>
        <Navigation currentStep="profile" />
      </ContentLeft>
      <ContentRight>
        <GeneralInfos />
      </ContentRight>
    </Container>
  );
};

export default Configuration;
