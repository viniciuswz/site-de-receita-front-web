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

import { Container, ContainerError, PasswordButton } from './styles';

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelName: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
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

  return (
    <Container
      hasValue={!!inputValue}
      className={`${inputFocus ? 'focus' : ''}`}
      isErrored={!!error}
    >
      <label htmlFor={id}>{labelName}</label>
      <input
        id={id}
        type={passwordStatusType}
        name={name}
        onChange={e => {
          setInputValue(e.target.value);
        }}
        onFocus={() => {
          handleInputFocus();
        }}
        ref={elementInputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {type === 'password' && (
        <PasswordButton type="button" onClick={handleShowPassword}>
          {!inputShowPassword ? <IconShowPassword /> : <IconHidePassword />}
        </PasswordButton>
      )}

      {error && (
        <ContainerError>
          <span className="error">{error}</span>
        </ContainerError>
      )}
    </Container>
  );
};

export default DefaultInput;
