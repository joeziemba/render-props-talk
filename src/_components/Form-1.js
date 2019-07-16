import React from "react";

class Form1 extends React.Component {
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
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.onChange}
          />

          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.onChange}
          />

          <input type="submit" />
        </form>
        <span className='version'>v1.0</span>
      </div>
    );
  }
}

export default Form1;
