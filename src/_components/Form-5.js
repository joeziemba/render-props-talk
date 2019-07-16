import React from "react";
import Input2 from "./Input2";
import Validator2 from "./Validator2";

class Form5 extends React.Component {
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
          <Validator2
            value={this.state.name}
            render={validatorProps => {
              return (
                <Input2
                  onChange={this.onChange}
                  name={"name"}
                  {...validatorProps}
                />
              );
            }}
          />

          <Validator2
            email
            value={this.state.email}
            render={validatorProps => {
              return (
                <Input2
                  onChange={this.onChange}
                  name={"email"}
                  {...validatorProps}
                />
              );
            }}
          />
          <input type="submit" />
        </form>
        <span className='version'>v5.0</span>
      </div>
    );
  }
}

export default Form5;
