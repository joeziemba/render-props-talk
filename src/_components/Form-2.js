import React from "react";

class Form2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      validation: {
        name: false,
        email: false
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    let { name, value } = e.target;
    debugger;
    this.setState({ [name]: value }, this.validate);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  validate() {
    let { validation } = this.state;
debugger;
    let fields = ["name", "email"];

    fields.forEach(field => {
      validation[field] = this.state[field] !== "";
    });

    this.setState({ validation });
  }

  render() {
    let { validation } = this.state;

    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className={validation.name ? "valid" : "invalid"}
            value={this.state.name}
            onChange={this.onChange}
            placeholder='name'
            name='name'
          />
          {validation.name
            ? null
            : <p className="error-message">This is required</p>
          }

          <input
            type="text"
            className={validation.email ? "valid" : "invalid"}
            value={this.state.email}
            onChange={this.onChange}
            placeholder='email'
            name='email'
          />
          {validation.email
            ? null
            : <p className="error-message">This is required</p>
          }

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Form2;
