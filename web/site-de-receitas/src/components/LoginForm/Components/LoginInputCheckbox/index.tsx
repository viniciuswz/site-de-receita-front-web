import { InputHTMLAttributes, useCallback, useState } from 'react';
import { Container } from './styles';

type LoginInputProps = InputHTMLAttributes<HTMLInputElement>;

const LoginInputCheckbox: React.FC<LoginInputProps> = () => {
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
      className={`${inputFocus ? 'focus' : ''}`}
    >
      <input
        id="remember"
        type="checkbox"
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
      <label htmlFor="remember">
        <div />
        <span>label</span>
      </label>
    </Container>
  );
};

export default LoginInputCheckbox;
