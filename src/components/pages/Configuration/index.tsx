import { useState } from 'react';
import { Content, Container, ContentLeft, ContentRight } from './styles';

import { Navigation, ControllerForm } from './Common/index';

export type Steps = 'generalInfoForm' | 'passwordForm';

const Configuration: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Steps>('generalInfoForm');
  return (
    <Content>
      <Container>
        <ContentLeft>
          <Navigation currentStep={currentPage} chooseStep={setCurrentPage} />
        </ContentLeft>
        <ContentRight>
          <ControllerForm currentStep={currentPage} />
        </ContentRight>
      </Container>
    </Content>
  );
};

export default Configuration;
