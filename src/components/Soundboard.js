import ButtonGrid from "./ButtonGrid";
import "./Soundboard.css";
import { title } from "../sounds";

const Soundboard = () => {
  const stopSound = () => {
    // stop all audios
    const audioTags = document.getElementsByTagName("audio");
    [].forEach.call(audioTags, audioTag => {
      audioTag.pause();
    });
  };

  return (
    <div className="soundboard-container">
      <div className="soundboard-header">
        <h1>{title || "Soundboard"}</h1>
        <button className="soundboard-stop-button" onClick={stopSound}>
          stop playing
        </button>
      </div>
      <ButtonGrid />
    </div>
  );
};

export default Soundboard;
