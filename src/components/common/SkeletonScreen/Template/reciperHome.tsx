import { useState } from 'react';
import { SkeletonScreenItem } from './styles';

const ReciperHome: React.FC = () => {
  const [totalSquares] = useState(6);

  const renderSquares = () => {
    const rows = [];
    for (let i = 1; i <= totalSquares; i += 1) {
      rows.push(<SkeletonScreenItem className={`grid-${i} `} />);
    }

    return <>{rows}</>;
  };

  return renderSquares();
};

export default ReciperHome;
