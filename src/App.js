import "./App.css";
import { useEffect } from "react";
import Soundboard from "./components/Soundboard";
import { title } from "./sounds";

function App() {
  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="App">
      <Soundboard />
    </div>
  );
}

export default App;
