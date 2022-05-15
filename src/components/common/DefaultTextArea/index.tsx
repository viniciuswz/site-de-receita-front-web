/* eslint-disable no-debugger */
import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useLayoutEffect,
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

interface DefaultInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
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
  const [textareaheight, setTextareaheight] = useState<number | string>('');

  const elementInputRef = useRef<HTMLTextAreaElement>(null);

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

  const handleChange = useCallback(event => {
    setInputValue(event.target.value);
  }, []);

  useLayoutEffect(() => {
    if (elementInputRef?.current) {
      elementInputRef.current.style.height = 'inherit';

      elementInputRef.current.style.height = `${Math.max(
        elementInputRef.current.scrollHeight,
        56
      )}px`;
    }
  }, [inputValue]);
  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: elementInputRef.current,
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    console.log('asdfasdasaaa', defaultValue);
  }, [defaultValue]);

  return (
    <Container
      hasValue={!!inputValue}
      className={`${inputFocus ? 'focus' : ''}`}
      isErrored={!!error}
    >
      <label htmlFor={id}>{labelName}</label>
      <textarea
        // rows={textareaheight}
        style={{ height: textareaheight }}
        id={id}
        name={name}
        onChange={e => {
          handleChange(e);
        }}
        onFocus={() => {
          handleInputFocus();
        }}
        onBlur={handleInputBlur}
        ref={elementInputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <ContainerError>
          <span className="error">{error}</span>
        </ContainerError>
      )}
    </Container>
  );
};

export default DefaultInput;
