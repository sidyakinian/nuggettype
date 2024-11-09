import './App.css';
import { useState } from 'react';
import { getHighlightedText, getRandomSentence } from './utils';

const GameState = {
  NotStarted: 'NOT_STARTED',
  Typing: 'TYPING',
  Finished: 'FINISHED',
};

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
  
const TypingInput = ({ gameState, input, sentence, handleInputChange }) => {
  const { correctText, incorrectText, remainingText } = getHighlightedText(sentence, input);

  return (
    <div className="typing-input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="input-field"
        disabled={gameState == GameState.Finished}
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

const ResetButton = ({ gameState, onClick }) => {
  return (
    <button onClick={onClick} className="reset-button">
      {gameState === GameState.Finished ? 'Play Again' : 'Reset'}
    </button>
  );
}

const App = () => {
  const [gameState, setGameState] = useState(GameState.NotStarted);
  const sentence = sentences[0];
  const [input, setInput] = useState("");
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const resetGame = () => {
    setGameState(GameState.NotStarted);
  };

  return (
    <div className="app">
      <Header />
      <TypingInput
        gameState={gameState}
        input={input} 
        handleInputChange={handleInputChange} 
        sentence={sentence} 
      />
      <ResetButton onClick={resetGame} gameState={gameState} />
    </div>
  );
}

export default App;
