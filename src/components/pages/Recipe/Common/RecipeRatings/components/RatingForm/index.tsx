import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';
import SkeletonScreen from '@/components/common/SkeletonScreen';
import { useState } from 'react';

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
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return loading ? (
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
  ) : (
    <>
      <RatingForm>
        <RatingHeader>
          <RatingFormUser>
            <SkeletonScreen type="perfil" />
          </RatingFormUser>
          <SkeletonScreen type="BtnSelect" />
          <SkeletonScreen type="btnSend" />
        </RatingHeader>
      </RatingForm>
    </>
  );
};

export default RecipeForm;
