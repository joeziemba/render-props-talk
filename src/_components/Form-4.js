import React from "react";
import Input from "./Input";
import Validator from "./Validator";

class Form4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <Validator
            value={this.state.name}
            render={validatorProps => {
              return (
                <Input
                  onChange={this.onChange}
                  name={"name"}
                  {...validatorProps}
                />
              );
            }}
          />

          <Validator
            // email
            value={this.state.email}
            render={validatorProps => {
              return (
                <Input
                  onChange={this.onChange}
                  name={"email"}
                  {...validatorProps}
                />
              );
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form4;
