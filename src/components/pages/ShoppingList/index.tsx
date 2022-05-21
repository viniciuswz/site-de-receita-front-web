import { useCallback, useState } from 'react';
import { ListItem, Modal } from './components';
import { ShoppingListContainer, ShoppingListContent } from './styles';

const ShoppingList: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(oldValue => !oldValue);
  }, []);
  return (
    <>
      {isModalOpen && <Modal handleToggleModal={handleToggleModal} />}
      <ShoppingListContainer>
        <h3>Lista de compras</h3>
        <ShoppingListContent>
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
          <ListItem handleToggleModal={handleToggleModal} />
        </ShoppingListContent>
      </ShoppingListContainer>
    </>
  );
};

export default ShoppingList;
