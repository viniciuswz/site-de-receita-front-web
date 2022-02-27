import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';

import {
  RatingForm,
  RatingFormButton,
  RatingFormInput,
  RatingFormUser,
  RatingHeader,
  RatingPhotosContainer,
  RatingPhotosButton,
  RatingPhotosUploaded,
} from './styles';

const RecipeForm: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default RecipeForm;
