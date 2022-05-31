import { ReactElement, useState } from 'react';
import { Skeleton } from './styles';

interface SkeletonScreenProps {
  type: string;
}

const SkeletonScreen: React.FC<SkeletonScreenProps> = ({ type }) => {
  return <Skeleton className={type} />;
};

export default SkeletonScreen;
