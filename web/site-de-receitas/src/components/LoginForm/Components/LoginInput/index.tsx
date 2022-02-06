import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { useField } from '@unform/core';

import IconShowPassword from '@/assets/images/password_show_icon_24.svg';
import IconHidePassword from '@/assets/images/password_hide_icon_24.svg';
import WarnErrorIcon from '@/assets/images/warn_error_icon_24.svg';

// import IconShowPassword from '../../../../../public/images/password_show_icon_24.svg';
// import IconHidePassword from '../../../../../public/images/password_hide_icon_24.svg';

import {
  Container,
  ContainerError,
  ContainerInput,
  PasswordButton,
} from './styles';

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  position: 'top' | 'middle' | 'bottom';
  name: string;
  labelName: string;
}

const LoginInput: React.FC<LoginInputProps> = ({
  position,
  type,
  name,
  labelName,
  id,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [inputShowPassword, setInputShowPassword] = useState(false);

  const elementInputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setInputFocus(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setInputFocus(false);
  }, []);

  const handleShowPassword = useCallback(() => {
    elementInputRef.current?.focus();
    setInputShowPassword(oldValue => {
      return !oldValue;
    });
  }, []);

  const passwordStatusType = useMemo(() => {
    return type === 'password' && inputShowPassword ? 'text' : type;
  }, [inputShowPassword, type]);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: elementInputRef.current,
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    console.log('error', error);
  }, [error]);

  return (
    <Container
      hasValue={!!inputValue}
      className={`${position} ${inputFocus ? 'focus' : ''}`}
      isErrored={!!error}
    >
      <ContainerInput>
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
          ref={elementInputRef}
          defaultValue={defaultValue}
          {...rest}
        />
        <label htmlFor={id}>{labelName}</label>
        {type === 'password' && (
          <PasswordButton type="button" onClick={handleShowPassword}>
            {!inputShowPassword ? <IconShowPassword /> : <IconHidePassword />}
          </PasswordButton>
        )}
        {error && <WarnErrorIcon className="error-icon" />}
      </ContainerInput>
      {error && (
        <ContainerError>
          <span className="error">{error}</span>
        </ContainerError>
      )}
    </Container>
  );
};

export default LoginInput;
