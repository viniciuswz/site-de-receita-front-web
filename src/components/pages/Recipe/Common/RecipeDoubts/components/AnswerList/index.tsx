import { Container, ButtonLoadMore } from './styles';

import Comment from '../Comment';

const AnswerList: React.FC = () => {
  return (
    <Container>
      <Comment />
      <Comment />
      <ButtonLoadMore>Ver mais x respostas</ButtonLoadMore>
    </Container>
  );
};

export default AnswerList;
