import Link from 'next/link';
import { FaCamera, FaHeart, FaStar } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';

import {
  ProfileInfoContainer,
  TogglePhotoButton,
  ProfilePhoto,
  ProfileBasicInfo,
  ProfileDetails,
  ProfileRecipesDone,
} from './styles';

const ProfileInfoBox: React.FC = () => {
  return (
    <ProfileInfoContainer>
      <ProfilePhoto>
        <div>
          <img src="/images/default-profile.png" alt="" />
          <TogglePhotoButton>
            <FaCamera />
          </TogglePhotoButton>
        </div>
      </ProfilePhoto>
      <ProfileBasicInfo>
        <p>Vinícius Araújo da Silva</p>
        <span>Barueri, São Paulo</span>
      </ProfileBasicInfo>
      <ProfileDetails>
        <ul>
          <li>
            <MdAssignment />
            <p> 10 Lorem ipsum dolor sit</p>
          </li>
          <li>
            <FaHeart />
            <p> 10 Lorem ipsum dolor sit</p>
          </li>
          <li>
            <FaStar />
            <p> 10 Lorem ipsum dolor sit</p>
          </li>
        </ul>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          dolorum rem magnam veritatis ea itaque quibusdam deserunt fugit
          similique odio natus, voluptatum accusantium quo rerum animi dolor
          voluptate ad debitis.
        </p>
      </ProfileDetails>
      <ProfileRecipesDone>
        <h3>Receitas realizadas</h3>
        <div>
          <Link href="/receita/strogonoff">
            <a>
              <img src="/images/receitas/default_image.png" alt="receita top" />
            </a>
          </Link>
          <Link href="/receita/strogonoff">
            <a>
              <img src="/images/receitas/default_image.png" alt="receita top" />
            </a>
          </Link>
          <Link href="/receita/strogonoff">
            <a>
              <img src="/images/receitas/default_image.png" alt="receita top" />
            </a>
          </Link>
        </div>
      </ProfileRecipesDone>
    </ProfileInfoContainer>
  );
};

export default ProfileInfoBox;
