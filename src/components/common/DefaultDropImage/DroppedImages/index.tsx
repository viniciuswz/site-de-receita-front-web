import { MdClose } from 'react-icons/md';
import { customFile } from '../index';

import { Container } from './styles';

interface DroppedImageProps {
  files: customFile[];
  removeImage(fileName: string): void;
  addImage(files: File[]): void;
}

const DroppedImage: React.FC<DroppedImageProps> = ({
  files,
  removeImage,
  addImage,
}) => {
  return (
    <>
      {files.length !== 0 && (
        <Container>
          <ul>
            {files.map(file => (
              <li key={file.name}>
                <img src={file.preview} alt="" width={100} />
                <button
                  type="button"
                  onClick={() => {
                    removeImage(file.name);
                  }}
                >
                  <MdClose size={16} />
                </button>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </>
  );
};

export default DroppedImage;
