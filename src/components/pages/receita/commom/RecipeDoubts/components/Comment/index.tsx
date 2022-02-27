import { FiMoreHorizontal } from 'react-icons/fi';
import AnswerList from '../AnswerList';

import {
  Container,
  Comment,
  CommentContent,
  CommentContentHeader,
  CommentContentNav,
  CommentContentText,
  CommentUser,
  CommentContainer,
  CommentMenuButton,
} from './styles';

const CommentComponent: React.FC = () => {
  return (
    <>
      <Comment>
        <CommentUser>
          <img src="/images/default-profile.png" alt="user" />
        </CommentUser>
        <CommentContainer>
          <CommentContent>
            <CommentContentHeader>
              <p>Vinícius Araújo</p>
              <span>8 horas</span>
            </CommentContentHeader>
            <CommentContentText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tenetur obcaecati voluptates laudantium dolorem repellendus iure
              itaque nisi, molestias quos error fuga, eos ut animi odio
              temporibus non iste totam!
            </CommentContentText>
          </CommentContent>
          <CommentContentNav>
            <div>
              <button type="button">Curtir</button>
              <button type="button">Responder</button>
            </div>

            <div>
              <span>89 curtidas</span>
            </div>
          </CommentContentNav>
        </CommentContainer>
        <CommentMenuButton>
          <FiMoreHorizontal />
        </CommentMenuButton>
      </Comment>
    </>
  );
};

export default CommentComponent;
