import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Container, PasswordButton } from './styles';

import IconShowPassword from '../../../../../public/images/password_show_icon_24.svg';
import IconHidePassword from '../../../../../public/images/password_hide_icon_24.svg';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  position: 'top' | 'middle' | 'bottom';
  type: string;
  name: string;
  id: string;
}

const LoginInput: React.FC<LoginInputProps> = ({
  position,
  type,
  name,
  id,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [inputShowPassword, setInputShowPassword] = useState(false);

  const handleInputFocus = useCallback(() => {
    setInputFocus(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setInputFocus(false);
  }, []);

  const handleShowPassword = useCallback(() => {
    setInputShowPassword(oldValue => {
      return !oldValue;
    });
  }, []);

  useEffect(() => {
    console.log(inputValue);
  }, []);

  const passwordStatusType = useMemo(() => {
    return type === 'password' && inputShowPassword ? 'text' : type;
  }, [inputShowPassword, type]);

  return (
    <Container
      hasValue={!!inputValue}
      className={`${position} ${inputFocus ? 'focus' : ''}`}
    >
      <input
        id={id}
        type={passwordStatusType}
        name={name}
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
      <label htmlFor={id}>{name}</label>
      {type === 'password' && (
        <PasswordButton type="button" onClick={handleShowPassword}>
          {!inputShowPassword ? <IconShowPassword /> : <IconHidePassword />}
        </PasswordButton>
      )}
    </Container>
  );
};

export default LoginInput;
