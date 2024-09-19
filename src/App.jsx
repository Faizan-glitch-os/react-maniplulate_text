import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Buttons from "./components/Buttons.jsx";

function App() {
  const [text, setText] = useState("");

  let textOnChangeHandler = (event) => setText(event.target.value);

  let handleClick = () => setText(text.toUpperCase());

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1>Enter Text</h1>
        <textarea
          className="form-control"
          value={text}
          onChange={textOnChangeHandler}
          rows="8"
        />
        <Buttons
          buttonClick={handleClick}
          whichButton="btn btn-outline-primary my-3"
          buttonName="Inverse Text"
        />
      </div>
    </>
  );
}

export default App;
