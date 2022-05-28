import ReciperHome from './Template/reciperHome';

interface SkeletonScreenProps {
  type: string;
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = ({ type }) => {
  console.log(type);

  return <ReciperHome />;
};

export default SkeletonScreen;
