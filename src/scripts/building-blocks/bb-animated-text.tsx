import * as React from "react";

interface IProps {
  /**
   * 
   * array of strings to animate
   * 
   * @type {string[]}@memberof IProps
   */
  strings: string[];

  /**
   * 
   * Initial position of string to start animating from
   * 
   * @type {number}@memberof IProps
   */
  offset?: number;

  /**
   * 
   * Number of random characters to show per character
   * 
   * @type {number}@memberof IProps
   */
  iterations?: number;

  /**
   * 
   * Timeout between each random character
   * 
   * @type {number}@memberof IProps
   */
  characterTimeout?: number;

  /**
   * 
   * Timeout between each string
   * 
   * @type {number}@memberof IProps
   */
  stringTimeout?: number;

  /**
   * Random characters to pick from
   * 
   * @type {string[]}@memberof IProps
   */
  characters?: string[];

  /**
   * 
   * Infinitely go through the string array (Default: false)
   * 
   * @type {boolean}@memberof IProps
   */
  infinite?: boolean;

  uppercase?: boolean;
}

interface IState {
  currentStringIndex: number;
  currentCharacterIndex: number;
  currentIterationIndex: number;
  currentRandomCharacter: string;
}

export class BbAnimatedText extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    strings: [],
    offset: 0,
    iterations: 10,
    characterTimeout: 10,
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
    infinite: false,
    uppercase: false
  };

  private characterTimer: number;
  private stringTimer: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentStringIndex: 0,
      currentCharacterIndex: this.props.offset,
      currentIterationIndex: 0,
      currentRandomCharacter: this.getRandomCharacter()
    };
  }

  getRandomCharacter() {
    const characters = this.props.characters;
    return characters[Math.floor(Math.random() * characters.length)];
  }

  componentDidMount() {
    // using window.setInterval to make sure the Nodejs setTimer typing is not used
    // https://github.com/TypeStrong/atom-typescript/issues/1053
    this.characterTimer = window.setInterval(() => {
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

  setNextString(prevState: IState, props: IProps) {
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
        characterIndex = prevState.currentCharacterIndex;
        this.clearTimers();
      }
    }

    return {
      currentStringIndex: stringIndex,
      currentCharacterIndex: characterIndex
    };
  }

  setNextCharacter(prevState: IState, props: IProps) {
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
        // using window.setInterval to make sure the Nodejs setTimer typing is not used 
        this.stringTimer = window.setTimeout(() => {
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
    let partialString = this.props.strings[this.state.currentStringIndex].substring(0, this.state.currentCharacterIndex) + this.state.currentRandomCharacter;
    partialString = this.props.uppercase ? partialString.toUpperCase() : partialString;
    return (
      <span>
        {partialString}
      </span>
    );
  }
}
