
import * as React from "react";

interface ITextInputProps {
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  focus?: boolean;
}

interface ITextInputState {
  value: string;
}

export class TextInput extends React.Component<ITextInputProps, ITextInputState> {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  public static defaultProps: ITextInputProps = {
    value: "",
    placeholder: "Enter something",
    focus: false
  };

  private domRef: HTMLInputElement;

  onChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      value: e.currentTarget.value
    });
    if (this.props.onChange) {
      this.props.onChange(e.currentTarget.value);
    }
  }

  componentWillReceiveProps(newProps: ITextInputProps) {
    this.changeFocus(newProps.focus);
  }

  changeFocus = (focus: boolean) => {
    if (focus) {
      this.domRef.focus();
    } else {
      this.domRef.blur();
    }
  }

  componentDidMount() {
    this.changeFocus(this.props.focus);
  }

  render() {
    return (
      <input
        type="text"
        onChange={this.onChange}
        value={this.state.value}
        ref={(textInput) => { this.domRef = textInput; }}
        placeholder={this.props.placeholder}
      />
    );
  }
}
export default TextInput;
