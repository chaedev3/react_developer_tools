import { useEffect, useState } from "react";
import "./App.css";
import PhotoOne from "./PhotoOne";
import PhotoTwo from "./PhotoTwo";

function App() {
  const [message, setMessage] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then(setPhotos);
  }, [setPhotos]);

  return (
    <div>
      <input
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <div className="photos">
        <PhotoOne photos={photos} message={message} />
        <PhotoTwo photos={photos} message={message} />
      </div>
    </div>
  );
}

export default App;
