import "./SoundboardButton.css";

const SoundboardButton = ({ name, file, id }) => {
  const playSound = () => {
    // stop all audios
    const audioTags = document.getElementsByTagName("audio");
    [].forEach.call(audioTags, audioTag => {
      audioTag.pause();
    });
    //restart time and play new sound
    const audioTag = document.getElementById(id);
    console.log(audioTag);
    audioTag.currentTime = 0;
    audioTag.play();
  };
  return (
    <button className="soundboard-button" onClick={playSound}>
      <audio src={file} id={id} />
      <span>{name}</span>
    </button>
  );
};

export default SoundboardButton;
