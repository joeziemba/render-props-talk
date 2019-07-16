import React from "react";

class Validator2 extends React.Component {

  state = {
    attempted: false,
    isValid: false,
    ...this.props
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.value !== this.props.value)
      this.setState({value: this.props.value}, this.validate)
  }

  validate = () => {

    let isValid = this.state.value !== "";

    if (!isValid) {
      this.setState({
        isValid,
        errorMessage: "This field is required"
      })
      return;
    }

    if (isValid && this.props.email) {
      isValid = this.state.value.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
      );
      if (!isValid) {
        this.setState({
          isValid,
          errorMessage: "Must enter an email"
        })
        return;
      }
    }

    this.setState({isValid: true})
  }

  attempted = () => {
    this.setState({ attempted: true })
  }

  render() {
    return this.props.render({...this.state, onBlur: this.attempted});
  }
};

export default Validator2;
