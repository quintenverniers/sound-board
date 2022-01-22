import "./Soundboard.css";
import SoundboardButton from "./SoundboardButton";
import sounds from "../sounds";

const ButtonGrid = () => {
  return (
    <div className="soundboard-grid">
      {sounds.map(sound => {
        return (
          <SoundboardButton
            name={sound.name}
            file={sound.file}
            key={sound.id}
            id={sound.id}
          />
        );
      })}
    </div>
  );
};

export default ButtonGrid;
