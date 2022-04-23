import {
  Component,
  ReactNode,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';

import { useField } from '@unform/core';

import CreatableSelect from 'react-select/creatable';

import {
  ActionMeta,
  GroupBase,
  InputActionMeta,
  OnChangeValue,
  SingleValue,
} from 'react-select';
import { Container, ContainerError, Label } from './styles';

const renameLabel = (value: string) => {
  return `Nova categoria: ${value}`;
};
const renamePlaceholder = () => {
  return `Selecione uma categoria`;
};

interface Options {
  value: string;
  label: string;
}
interface DefaultSelectProps {
  name: string;
  label: string;
  propOptions: Array<Options>;
  isMulti?: boolean;
}

const DefaultSelect: React.FC<DefaultSelectProps> = ({
  name,
  label,
  propOptions,
  isMulti,
}) => {
  const [inputValue, setInputValue] = useState('');
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [inputFocus, setInputFocus] = useState(false);
  const selectRef = useRef(null);

  const [options, setOptions] = useState(() => propOptions);

  const handleInputFocus = useCallback(() => {
    setInputFocus(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setInputFocus(false);
  }, []);

  const handleChange = (
    newValue: SingleValue<{
      value: string;
      label: string;
    }>,
    actionMeta: ActionMeta<{
      value: string;
      label: string;
    }>
  ) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const handleInputChange = (newValue: string, actionMeta: InputActionMeta) => {
    console.group('Input Changed');
    console.log(newValue);
    setInputValue(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        console.log('AAAAAAAAA', ref);
        if (!ref.state.selectValue) {
          return [];
        }
        return ref.state.selectValue;
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container
      hasValue={!!inputValue}
      className={`${inputFocus ? 'focus' : ''}`}
      isErrored={!!error}
    >
      <Label>{label}</Label>
      <CreatableSelect
        className="default-select"
        classNamePrefix="default-select"
        name={name}
        isClearable
        onChange={handleChange}
        ref={selectRef}
        onInputChange={handleInputChange}
        options={options}
        formatCreateLabel={renameLabel}
        placeholder="Escolha uma opção..."
        isMulti={isMulti}
      />
      {error && (
        <ContainerError>
          <span className="error">{error}</span>
        </ContainerError>
      )}
    </Container>
  );
};

export default DefaultSelect;
