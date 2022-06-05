import { AiFillStar } from 'react-icons/ai';
import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';
import { useState } from 'react';
import SkeletonScreen from '@/components/common/SkeletonScreen';

import {
  RatingDetailsContainer,
  RatingDetailsByStars,
  RatingDetailsGeneral,
} from './styles';

const RecipeDetails: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(true);
  }, 5000);

  return loading ? (
    <>
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
    </>
  ) : (
    <>
      <RatingDetailsContainer>
        <RatingDetailsGeneral>
          <SkeletonScreen type="square" />
          <SkeletonScreen type="text" />
        </RatingDetailsGeneral>
        <RatingDetailsByStars>
          <SkeletonScreen type="text" />
          <SkeletonScreen type="text" />
          <SkeletonScreen type="text" />
          <SkeletonScreen type="text" />
          <SkeletonScreen type="text" />
        </RatingDetailsByStars>
      </RatingDetailsContainer>
    </>
  );
};

export default RecipeDetails;
