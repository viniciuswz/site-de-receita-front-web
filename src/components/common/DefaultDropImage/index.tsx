import { useCallback, useEffect, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField } from '@unform/core';

import { FaCamera } from 'react-icons/fa';
import {
  Container,
  ContainerError,
  DropBox,
  DropBoxMessage,
  Label,
} from './style';

import DroppedImages from './DroppedImages';

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
  const { fieldName, registerField, defaultValue = [], error } = useField(name);
  const [acceptedFiles, setAcceptedFiles] =
    useState<customFile[]>(defaultValue);

  const addImage = useCallback((onDropAcceptedFiles: File[]) => {
    setAcceptedFiles(oldFiles => {
      const payload = [...oldFiles, ...onDropAcceptedFiles];
      const payloadwithoutDuplication = payload.filter(
        (file: File, index: number, self: File[]) => {
          const nonDuplicatedIndex = self.findIndex(
            duplicatedFile => duplicatedFile.name === file.name
          );
          return nonDuplicatedIndex === index;
        }
      );
      const payloadWithPreview = payloadwithoutDuplication.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );

      if (inputRef.current) {
        inputRef.current.acceptedFiles = payloadWithPreview;
      }

      return payloadWithPreview;
    });
  }, []);

  const removeImage = useCallback((fileName: string) => {
    setAcceptedFiles(files => {
      const newFiles = files.filter((file: File) => file.name !== fileName);
      if (inputRef.current) {
        inputRef.current.acceptedFiles = newFiles;
      }
      return newFiles;
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/*',
    onDrop: onDropAcceptedFiles => {
      // setAcceptedFiles(onDropAcceptedFiles);

      addImage(onDropAcceptedFiles);
    },
  });

  useEffect(() => {
    console.log(isDragActive);
  }, [isDragActive]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: InputRefProps) => {
        return ref.acceptedFiles || [];
      },
      clearValue: () => {
        if (inputRef.current) {
          inputRef.current.acceptedFiles = [];
          setAcceptedFiles([]);
        }
      },
      setValue: (ref: InputRefProps, value) => {
        addImage(value);
      },
    });
  }, [fieldName, registerField, addImage]);
  useEffect(() => {
    console.log('asdasd', acceptedFiles);
  }, [acceptedFiles]);
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
          <DropBoxMessage>
            <p>Solte os arquivos aqui</p>
          </DropBoxMessage>
        ) : (
          <DropBoxMessage>
            <FaCamera />
            <p>
              Arraste e solte algumas imagens aqui, ou clique para selecionalas
            </p>
            <span>No máximo 4 imagens</span>
          </DropBoxMessage>
        )}
      </DropBox>

      {acceptedFiles.length > 0 && (
        <DroppedImages
          files={acceptedFiles}
          removeImage={removeImage}
          addImage={addImage}
        />
      )}
      {error && (
        <ContainerError>
          <span className="error">{error}</span>
        </ContainerError>
      )}
    </Container>
  );
};

export default ReactDropzoneInput;
