const getRandomSentence = (sentences) => sentences[Math.floor(Math.random() * sentences.length)];

const getHighlightedText = (sentence, input) => {
  let correctText = "";
  let incorrectText = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === sentence[i]) {
      correctText += input[i];
    } else {
      incorrectText = input.slice(i);
      break;
    }
  }
  const remainingText = sentence ? sentence.slice(input.length) : "";
  return { correctText, incorrectText, remainingText };
};

const calculateTypingSpeed = (sentence, time) => {
    const minutes = time / 60.0;
    const averageWordLength = 5.0;
    const numWords = sentence.length / averageWordLength;
    return numWords / minutes;
}

export { getHighlightedText, getRandomSentence, calculateTypingSpeed, };