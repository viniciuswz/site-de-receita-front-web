import { AiFillStar } from 'react-icons/ai';

import { MdOutlinePhotoCamera, MdClose } from 'react-icons/md';

import RecipeDetails from './components/RatingDetails';
import RatingForm from './components/RatingForm';
import RatingList from './components/RatingList';

import { Container } from './styles';

const RecipeRating: React.FC = () => {
  return (
    <Container>
      <h2>Avaliações</h2>
      <RecipeDetails />
      <RatingForm />
      <RatingList />
    </Container>
  );
};

export default RecipeRating;
