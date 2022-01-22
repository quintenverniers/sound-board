import "./Soundboard.css";
import SoundboardButton from "./SoundboardButton";
import { sounds } from "../sounds";

const ButtonGrid = () => {
  return (
    <div className="soundboard-grid">
      {sounds.length > 0 ? (
        sounds.map(sound => {
          return (
            <SoundboardButton
              name={sound.name}
              file={sound.file}
              key={sound.id}
              id={sound.id}
            />
          );
        })
      ) : (
        <h2>No sounds found</h2>
      )}
    </div>
  );
};

export default ButtonGrid;
