import { AiFillStar } from 'react-icons/ai';

import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';

import {
  Container,
  RatingDetailsContainer,
  RatingDetailsByStars,
  RatingDetailsGeneral,
  RatingForm,
  RatingFormButton,
  RatingFormInput,
  RatingFormUser,
  RatingHeader,
  RatingPhotosContainer,
  RatingPhotosButton,
  RatingPhotosUploaded,
} from './styles';

const RecipeRating: React.FC = () => {
  return (
    <Container>
      <h2>Avaliações</h2>
      <RatingDetailsContainer>
        <RatingDetailsGeneral>
          <span>4.6</span>
          <div>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p>Total de 55 opiniões</p>
        </RatingDetailsGeneral>
        <RatingDetailsByStars>
          <li>
            <p>5</p>
            <AiFillStar />
            <div>
              <div />
            </div>
            <span>50</span>
          </li>
          <li>
            <p>4</p>
            <AiFillStar />
            <div>
              <div />
            </div>
            <span>50</span>
          </li>
          <li>
            <p>3</p>
            <AiFillStar />
            <div>
              <div />
            </div>
            <span>50</span>
          </li>
          <li>
            <p>2</p>
            <AiFillStar />
            <div>
              <div />
            </div>
            <span>50</span>
          </li>
          <li>
            <p>1</p>
            <AiFillStar />
            <div>
              <div />
            </div>
            <span>50</span>
          </li>
        </RatingDetailsByStars>
      </RatingDetailsContainer>
      <RatingForm>
        <RatingHeader>
          <RatingFormUser>
            <img src="/images/default-profile.png" alt="profile" />
          </RatingFormUser>
          <RatingFormInput placeholder="Faça uma avaliação" />
          <RatingFormButton>Enviar</RatingFormButton>
        </RatingHeader>
        <RatingPhotosContainer>
          <RatingPhotosButton>
            <MdOutlinePhotoCamera />
            <span>Adicionar foto da receita</span>
          </RatingPhotosButton>
          <RatingPhotosUploaded>
            <ul>
              <li>
                <img src="/images/receitas/default_image.png" alt="recipe" />
                <button type="button">
                  <MdClose />
                </button>
              </li>
              <li>
                <img src="/images/receitas/default_image.png" alt="recipe" />
                <button type="button">
                  <MdClose />
                </button>
              </li>
            </ul>
            <button type="button">+2fotos</button>
          </RatingPhotosUploaded>
        </RatingPhotosContainer>
      </RatingForm>
    </Container>
  );
};

export default RecipeRating;
