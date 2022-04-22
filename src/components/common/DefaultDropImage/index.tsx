import { useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

import { Container, DropBox, Label } from './style';

interface Props {
  name: string;
  label: string;
}

export interface customFile extends File {
  preview?: string;
}

interface InputRefProps extends HTMLInputElement {
  acceptedFiles: File[];
}

const ReactDropzoneInput: React.FC<Props> = ({ name, label }) => {
  const inputRef = useRef<InputRefProps>(null);
  const { fieldName, registerField, defaultValue = [] } = useField(name);
  const [acceptedFiles, setAcceptedFiles] =
    useState<customFile[]>(defaultValue);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: onDropAcceptedFiles => {
      if (inputRef.current) {
        inputRef.current.acceptedFiles = onDropAcceptedFiles;
        // setAcceptedFiles(onDropAcceptedFiles);
        setAcceptedFiles(
          onDropAcceptedFiles.map(file =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      }
    },
  });

  useEffect(() => {
    console.log(acceptedFiles);
  }, [acceptedFiles]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        console.log('asdasd', ref);
        console.dir(ref);
        return ref.acceptedFiles || [];
      },
      clearValue: () => {
        if (inputRef.current) {
          inputRef.current.acceptedFiles = [];
          setAcceptedFiles([]);
        }
      },
      setValue: (ref: InputRefProps, value) => {
        // console.log('ASDASDASD', ref);
        if (inputRef.current) {
          inputRef.current.acceptedFiles = value;
          setAcceptedFiles(value);
        }
      },
    });
  }, [fieldName, registerField]);
  useEffect(() => {
    console.log();
  }, []);
  return (
    <Container>
      <Label>{label}</Label>
      <DropBox
        {...getRootProps()}
        role="button"
        onClick={() => inputRef.current?.click()}
        onKeyDown={() => inputRef.current?.click()}
        tabIndex={0}
      >
        <input {...getInputProps()} accept="image/*" ref={inputRef} />

        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </DropBox>
    </Container>
  );
};

export default ReactDropzoneInput;
