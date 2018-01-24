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
  randomCharacterClasses?: string;
  /**
   * Class names applied when a string is complete
   */
  endOfStringClasses?: string;
  /**
   * Class names applied when a string is incomplete
   */
  stringClasses?: string;
}

interface IState {
  currentStringIndex: number;
  currentCharacterIndex: number;
  currentIterationIndex: number;
  currentRandomCharacter: string;
  isAtEndOfString: boolean;
}

export class BbAnimatedText extends React.Component<IProps, IState> {
  public static defaultProps: IProps = {
    strings: [],
    offset: 0,
    iterations: 3,
    characterTimeout: 50,
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
    uppercase: false,
    endOfStringClasses: "eof-string",
    stringClasses: "bb-animated-string"
  };

  private characterTimer: number;
  private stringTimer: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      currentStringIndex: 0,
      currentCharacterIndex: this.props.offset,
      currentIterationIndex: 0,
      currentRandomCharacter: this.getRandomCharacter(),
      isAtEndOfString: false
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

  setNextString(prevState: IState, props: IProps): Partial<IState> {
    let characterIndex = props.offset,
      stringIndex = prevState.currentStringIndex + 1;

    if (stringIndex >= props.strings.length) {
      // reached end of string array so update stringIndex
      if (props.infinite) {
        // if infinite animation loop reset it back to 0
        stringIndex = 0;
      } else {
        // (animation is over) reset indices and clear timer
        stringIndex = prevState.currentStringIndex;
        characterIndex = prevState.currentCharacterIndex;
        this.clearTimers();
      }
    }

    return {
      currentStringIndex: stringIndex,
      currentCharacterIndex: characterIndex,
      isAtEndOfString: false
    };
  }

  setNextCharacter(prevState: IState, props: IProps): Partial<IState> {
    const stringIndex = prevState.currentStringIndex;
    let characterIndex = prevState.currentCharacterIndex,
      iterationIndex = prevState.currentIterationIndex + 1,
      currentCharacter = this.getRandomCharacter(),
      isAtEndOfString = false;

    if (iterationIndex >= props.iterations) {
      // reached end of iterations so increase characterIndex
      iterationIndex = 0;
      characterIndex++;

      if (characterIndex >= props.strings[stringIndex].length) {
        // reached last character
        currentCharacter = "";
        isAtEndOfString = true;
        // using window.setInterval to make sure the Nodejs setTimer typing is not used
        this.stringTimer = window.setTimeout(() => {
          clearTimeout(this.stringTimer);
          this.stringTimer = undefined;
          this.setState(this.setNextString as () => IState);
        }, props.stringTimeout);
      }
    }

    return {
      currentCharacterIndex: characterIndex,
      currentIterationIndex: iterationIndex,
      currentRandomCharacter: currentCharacter,
      isAtEndOfString
    };
  }

  animate() {
    this.setState(this.setNextCharacter as () => IState);
  }

  render() {
    let partialString = this.props.strings[this.state.currentStringIndex].substring(0, this.state.currentCharacterIndex);
    const randomCharacter = this.state.currentRandomCharacter;
    partialString = this.props.uppercase ? partialString.toUpperCase() : partialString;
    return (
      <span className={`${this.props.stringClasses} ${this.state.isAtEndOfString ? this.props.endOfStringClasses : ""}`}>
        {partialString}<span className={this.props.randomCharacterClasses}>{randomCharacter}</span>
      </span>
    );
  }
}
