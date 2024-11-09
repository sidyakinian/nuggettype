import './App.css';
import { useState } from 'react';
import { getHighlightedText, getRandomSentence } from './utils';

const sentences = [
    "beavers build dams to create safe, stable habitats.",
    "strong teeth allow beavers to cut down trees.",
    "dam-building skills make beavers natural ecosystem engineers.",
    "beaver dams help prevent flooding in river areas.",
    "tail slaps on water serve as beaver communication.",
    "beaver activity peaks during early morning and evening.",
    "lodges built by beavers provide shelter and warmth.",
    "wetland biodiversity thrives around beaver-made habitats."
  ];

const NuggetImage = ({ className, height }) => {
  return (
    <img src="./nugget_types.svg" alt="cute typing beaver" className={className} style={{ height: height }} />
  );
};
  

const Header = () => {
  return (
    <div className="header">
      <div className="image-row">
        <NuggetImage className="nugget-image" height="100px" />
        <NuggetImage className="nugget-image main-nugget" height="250px" />
        <NuggetImage className="nugget-image right-nugget" height="100px" />
      </div>
      <h1>NuggetType</h1>
    </div>
  );
};
  
const TypingInput = ({ input, sentence, handleInputChange }) => {
  const { correctText, incorrectText, remainingText } = getHighlightedText(sentence, input);

  return (
    <div className="typing-input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="input-field"
        autoFocus
      />
      <div className="typed-text">
        <span className="correct-text">{correctText}</span>
        <span className="incorrect-text">{incorrectText}</span>
        <span className="remaining-text">{remainingText}</span>
      </div>
    </div>
  );
};

const App = () => {
  const sentence = sentences[0];
  const [input, setInput] = useState("");
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  return (
    <div className="app">
      <Header />
      <TypingInput 
        input={input} 
        handleInputChange={handleInputChange} 
        sentence={sentence} 
      />
    </div>
  );
}

export default App;
