import Link from 'next/link';

import { TopReciperSectionItem, TopReciperSectionItemOverlay } from './styles';

interface TopRecipeItemHomeProps {
  position: number;
  href: string;
}

const TopRecipeItemHome: React.FC<TopRecipeItemHomeProps> = ({
  position,
  href,
}) => {
  return (
    <TopReciperSectionItem className={`grid-${position} `}>
      <Link href={href}>
        <a>
          <img src="images/receitas/default_image.png" alt="" />
          <TopReciperSectionItemOverlay>
            <div>
              <h3>Strogonoff de frango</h3>
            </div>
          </TopReciperSectionItemOverlay>
        </a>
      </Link>
    </TopReciperSectionItem>
  );
};

export default TopRecipeItemHome;
