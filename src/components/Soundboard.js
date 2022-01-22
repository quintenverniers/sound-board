import ButtonGrid from "./ButtonGrid";
import "./Soundboard.css";
import SoundboardHeader from "./SoundboardHeader";

const Soundboard = () => {
  return (
    <div className="soundboard-container">
      <SoundboardHeader />
      <ButtonGrid />
    </div>
  );
};

export default Soundboard;
