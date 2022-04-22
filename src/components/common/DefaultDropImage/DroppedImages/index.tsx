import { customFile } from '../index';

interface DroppedImageProps {
  files: customFile[];
}

const DroppedImage: React.FC<DroppedImageProps> = ({ files }) => {
  return (
    <>
      {files.length !== 0 && (
        <ul>
          {files.map(file => (
            <li key={file.name}>
              <span>{file.name}</span>
              <img src={file.preview} alt="" width={100} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DroppedImage;
