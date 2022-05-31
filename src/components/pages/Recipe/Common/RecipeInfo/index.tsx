import { FiMoreHorizontal } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

import { RiTimerLine } from 'react-icons/ri';

import { FaFacebookF, FaWhatsapp, FaPrint } from 'react-icons/fa';

import SkeletonScreen from '@/components/common/SkeletonScreen';
import { useState } from 'react';
import {
  Container,
  Profile,
  ProfileInfoPhoto,
  ProfileInfo,
  ProfileInfoButton,
  RecipeCommonInfo,
  RecipeRating,
  RecipeDetails,
  RecipeDescription,
  RecipeShare,
} from './styles';

const RecipeInfo: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(true);
  }, 5000);

  return loading ? (
    <Container>
      <Profile>
        <ProfileInfoPhoto>
          <img src="/images/default-profile.png" alt="profile" />
        </ProfileInfoPhoto>
        <ProfileInfo>
          <p>Enviado por</p>
          <span>Vinícius Araújo, 3 horas atrás</span>
        </ProfileInfo>
        <ProfileInfoButton>
          <FiMoreHorizontal size={24} />
        </ProfileInfoButton>
      </Profile>
      <RecipeCommonInfo>
        <h1>Strogonoff de frango</h1>
        <span>Categoria</span>
      </RecipeCommonInfo>
      <RecipeRating>
        <p>
          <span>4.6</span> de 5
        </p>
        <div>
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
          <AiFillStar size={24} />
        </div>
        <p>( 5 avaliações )</p>
      </RecipeRating>
      <RecipeDetails>
        <li>
          <RiTimerLine size={24} />
          <span>25 min</span>
        </li>
        <li>
          <RiTimerLine size={24} />
          <span>25 min</span>
        </li>
      </RecipeDetails>
      <RecipeDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta sint
        quam ut, eum magnam, blanditiis corporis est eaque odio, exercitationem
        corrupti obcaecati. Commodi architecto accusamus magni omnis delectus
        quidem cum.
      </RecipeDescription>
      <RecipeShare>
        <li>
          <button type="button">
            <FaFacebookF />
          </button>
        </li>
        <li>
          <button type="button">
            <FaWhatsapp />
          </button>
        </li>
        <li>
          <button type="button">
            <FaPrint />
          </button>
        </li>
      </RecipeShare>
    </Container>
  ) : (
    <Container>
      <Profile>
        <ProfileInfoPhoto>
          <SkeletonScreen type="perfil" />
        </ProfileInfoPhoto>
        <ProfileInfo>
          <SkeletonScreen type="title" />
          <SkeletonScreen type="text" />
        </ProfileInfo>
        <ProfileInfoButton>
          <FiMoreHorizontal size={24} />
        </ProfileInfoButton>
      </Profile>
      <RecipeCommonInfo>
        <SkeletonScreen type="titleH1" />
        <SkeletonScreen type="text" />
      </RecipeCommonInfo>
      <RecipeRating>
        <SkeletonScreen type="text" />
      </RecipeRating>
      <RecipeDetails>
        <SkeletonScreen type="btn" />
        <SkeletonScreen type="btn" />
      </RecipeDetails>
      <RecipeDescription>
        <SkeletonScreen type="text" />
        <SkeletonScreen type="text" />
        <SkeletonScreen type="text" />
      </RecipeDescription>
      <RecipeShare>
        <SkeletonScreen type="social_share" />
        <SkeletonScreen type="social_share" />
        <SkeletonScreen type="social_share" />
      </RecipeShare>
    </Container>
  );
};

export default RecipeInfo;
