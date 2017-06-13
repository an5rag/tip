import React from "react";
import PropTypes from "prop-types";

export class BbAnimatedText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStringIndex: 0,
      currentCharacterIndex: this.props.offset,
      currentIterationIndex: 0,
      currentRandomCharacter: this.getRandomCharacter()
    };
    something = {
      blah: sdfsfd
    }
  }

  getRandomCharacter() {
    const characters = this.props.characters;
    return characters[Math.floor(Math.random() * characters.length)];
  }

  componentDidMount() {
    this.characterTimer = setInterval(() => {
      if (this.stringTimer) {
        return;
      }
      this.animate();
    }, this.props.characterTimeout);
  }

  componentWillUnmount() {
    this.clearTimers();
  }

  clearTimers() {
    clearInterval(this.stringTimer);
    clearInterval(this.characterTimer);
  }

  setNextString(prevState, props) {
    let characterIndex = props.offset,
      stringIndex = prevState.currentStringIndex + 1;

    if (stringIndex >= props.strings.length) {
      // reached end of string array so update stringIndex
      if (props.infinite) {
        // if infinite animation loop reset it back to 0
        stringIndex = 0;
      } else {
        // (animation is over) reset indices and and clear timer
        stringIndex = prevState.currentStringIndex;
        characterIndex = prevState.characterIndex;
        this.clearTimers();
      }
    }

    return {
      currentStringIndex: stringIndex,
      currentCharacterIndex: characterIndex
    };
  }

  setNextCharacter(prevState, props) {
    let characterIndex = prevState.currentCharacterIndex,
      stringIndex = prevState.currentStringIndex,
      iterationIndex = prevState.currentIterationIndex + 1,
      currentCharacter = this.getRandomCharacter();

    if (iterationIndex >= props.iterations) {
      // reached end of iterations so increase characterIndex
      iterationIndex = 0;
      characterIndex++;

      if (characterIndex >= props.strings[stringIndex].length) {
        // reached last character
        currentCharacter = "";
        this.stringTimer = setTimeout(() => {
          clearTimeout(this.stringTimer);
          this.stringTimer = undefined;
          this.setState(this.setNextString);
        }, props.stringTimeout);
      }
    }

    return {
      currentCharacterIndex: characterIndex,
      currentIterationIndex: iterationIndex,
      currentRandomCharacter: currentCharacter
    };
  }

  animate() {
    this.setState(this.setNextCharacter);
  }

  render() {
    const partialString =
      this.props.strings[this.state.currentStringIndex].substring(
        0,
        this.state.currentCharacterIndex
      ) + this.state.currentRandomCharacter;
    return (
      <span>
        {partialString}
      </span>
    );
  }
}

BbAnimatedText.propTypes = {
  // array of strings to animate
  strings: PropTypes.arrayOf(PropTypes.string).isRequired,

  // Initial position of string to start animating from
  offset: PropTypes.number,

  // Number of random characters to show per character
  iterations: PropTypes.number,

  // Timeout between each random character
  characterTimeout: PropTypes.number,

  // Timeout between each string
  stringTimeout: PropTypes.number,

  // Random characters to pick from
  characters: PropTypes.arrayOf(PropTypes.string),

  // Infinitely go through the string array (Default: false)
  infinite: PropTypes.bool
};

BbAnimatedText.defaultProps = {
  offset: 0,
  iterations: 5,
  characterTimeout: 30,
  stringTimeout: 1000,
  characters: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "y",
    "x",
    "#",
    "%",
    "&",
    "-",
    "+",
    "_",
    "?",
    "/",
    "\\",
    "="
  ],
  infinite: true
};
