import React, { useState } from 'react';
import { Container, ContentLeft, ContentRight } from './styles';

import { Navigation, GeneralInfos } from './Common/index';

const Configuration: React.FC = () => {
  const [page, setPage] = useState('information');

  return (
    <Container>
      <ContentLeft>
        <Navigation pageSelected={page} setPageSelected={setPage} />
      </ContentLeft>
      <ContentRight>
        <GeneralInfos />
      </ContentRight>
    </Container>
  );
};

export default Configuration;
