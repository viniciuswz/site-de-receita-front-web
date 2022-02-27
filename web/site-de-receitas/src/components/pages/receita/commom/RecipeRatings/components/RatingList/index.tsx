import { BiChevronDown } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import {
  Container,
  Header,
  RatingListFilterButton,
  RatingListFilterDropdow,
  RatingListItem,
  RatingListItemHeader,
  RatingListItemHeaderInfo,
  RatingListItemHeaderPhoto,
  RatingListItemContent,
  RatingListItemText,
  RatingListPhotosUploaded,
  RatingListOpinion,
  RatingListLoadMore,
} from './styles';

const RatingList: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <h3>Filtrando por</h3>
          <RatingListFilterButton type="button">
            <span>Todas as avaliações</span>
            <BiChevronDown />
          </RatingListFilterButton>
        </Header>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <img src="/images/default-profile.png" alt="profile" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <p>Vinícius Araújo da Silva</p>
                <div>
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span> Há x meses</span>
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sapiente dolore optio distinctio dolorum reprehenderit, aut
              placeat cum unde voluptatum ullam sequi, illum accusantium sit
              itaque nisi aperiam nemo eos?
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <ul>
                <li>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </li>
                <li>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </li>
              </ul>
              <button type="button">+2fotos</button>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <p>Esta avaliação foi útil ?</p>
              <div>
                <button className="rating" type="button">
                  <IoMdThumbsUp />
                </button>
                <button className="rating" type="button">
                  <IoMdThumbsDown />
                </button>
                <button className="delate" type="button">
                  Denunciar
                </button>
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <img src="/images/default-profile.png" alt="profile" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <p>Vinícius Araújo da Silva</p>
                <div>
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span> Há x meses</span>
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sapiente dolore optio distinctio dolorum reprehenderit, aut
              placeat cum unde voluptatum ullam sequi, illum accusantium sit
              itaque nisi aperiam nemo eos?
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <ul>
                <li>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </li>
                <li>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </li>
              </ul>
              <button type="button">+2fotos</button>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <p>Esta avaliação foi útil ?</p>
              <div>
                <button className="rating" type="button">
                  <IoMdThumbsUp />
                </button>
                <button className="rating" type="button">
                  <IoMdThumbsDown />
                </button>
                <button className="delate" type="button">
                  Denunciar
                </button>
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
        <RatingListLoadMore type="button">
          Carregar mais avaliações
        </RatingListLoadMore>
      </Container>
    </>
  );
};

export default RatingList;
