import { useTransition } from 'react-spring';

import { ToastMessage, useToast } from '@/hooks/Toast';
import { Container } from './styles';

import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: '0' },
    enter: { right: '0%', opacity: '1' },
    leave: { right: '-120%', opacity: '0' },
  });
  return (
    <Container>
      {messagesWithTransitions((props, item) => {
        return <Toast key={item.id} message={item} style={props} />;
      })}
    </Container>
  );
};

export default ToastContainer;
