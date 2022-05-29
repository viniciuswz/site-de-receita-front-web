import { ReactElement, useState } from 'react';
import ReciperHome from './Template/reciperHome';

interface SkeletonScreenProps {
  type: string;
}
type AllTemplate = {
  reciperHome: ReactElement;
};

const SkeletonScreen: React.FC<SkeletonScreenProps> = ({ type }) => {
  const allTemplate: AllTemplate = {
    reciperHome: <ReciperHome />,
  };

  return type ? allTemplate[type] : '';
};

export default SkeletonScreen;
