import { AiFillStar } from 'react-icons/ai';

import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';

import {
  RatingDetailsContainer,
  RatingDetailsByStars,
  RatingDetailsGeneral,
} from './styles';

const RecipeDetails: React.FC = () => {
  return (
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
  );
};

export default RecipeDetails;
