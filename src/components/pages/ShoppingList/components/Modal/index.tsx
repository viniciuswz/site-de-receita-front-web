import { FaFacebookF, FaPrint, FaWhatsapp } from 'react-icons/fa';
import { RiTimerLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';

import {
  ContainerModal,
  ModalBackground,
  ModalContent,
  ModalHeader,
  ModalInfo,
  ModalInfoFlags,
  ModalInfoShare,
  ModalList,
} from './styles';

interface ModalProps {
  handleToggleModal(): void;
}

const Modal: React.FC<ModalProps> = ({ handleToggleModal }) => {
  return (
    <ContainerModal>
      <ModalBackground />
      <ModalContent>
        <ModalHeader>
          <button type="button" onClick={handleToggleModal}>
            <MdClose />
          </button>
        </ModalHeader>
        <ModalInfo>
          <img src="/images/receitas/default_image.png" alt="receita daora" />
          <div>
            <h4>nome receita</h4>
            <ModalInfoFlags>
              <li>
                <RiTimerLine size={24} />
                <span>25 min</span>
              </li>
              <li>
                <RiTimerLine size={24} />
                <span>5 porçoes</span>
              </li>
            </ModalInfoFlags>
            <ModalInfoShare>
              <li>
                <button type="button">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button type="button">
                  <FaWhatsapp />
                </button>
              </li>
              <li>
                <button type="button">
                  <FaPrint />
                </button>
              </li>
            </ModalInfoShare>
          </div>
        </ModalInfo>
        <ModalList>
          <ul>
            <li>
              <button type="button">
                <div />
                <p>1 kg Lorem ipsum dolor sit</p>
              </button>
            </li>
            <li>
              <button type="button">
                <div />
                <p>1 kg Lorem ipsum dolor sit</p>
              </button>
            </li>
          </ul>
        </ModalList>
      </ModalContent>
    </ContainerModal>
  );
};

export default Modal;
