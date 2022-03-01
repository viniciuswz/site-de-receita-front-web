import { Container, ButtonLoadMore } from './styles';

import Comment from '../Comment';
import AnswerList from '../AnswerList';

const DoubtList: React.FC = () => {
  return (
    <Container>
      <Comment />
      <AnswerList />
      <Comment />
      <ButtonLoadMore>Carregar mais dúvidas</ButtonLoadMore>
    </Container>
  );
};

export default DoubtList;
