import { InputHTMLAttributes, useCallback, useState } from 'react';
import { Container } from './styles';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  position: 'top' | 'middle' | 'bottom';
}

const LoginInput: React.FC<LoginInputProps> = ({ position }) => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = useCallback(() => {
    setInputFocus(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setInputFocus(false);
  }, []);
  return (
    <Container
      hasValue={!!inputValue}
      className={`${position} ${inputFocus ? 'focus' : ''}`}
    >
      <input
        id="first-name"
        type="text"
        name="namea"
        onChange={e => {
          setInputValue(e.target.value);
        }}
        onBlur={() => {
          handleInputBlur();
        }}
        onFocus={() => {
          handleInputFocus();
        }}
      />
      <label htmlFor="first-name">Nome</label>
    </Container>
  );
};

export default LoginInput;
