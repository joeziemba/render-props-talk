import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: ''
    }
  }

  render() {
    return (
      <div className="form-container">
        <h1>Sign Up</h1>
        <form>
          <input
            type='text'
            placeholder="name"
          />
          <input
            type='text'
            placeholder="email"
          />

          <input type="submit" />

        </form>
      </div>
    )
  }
}

export default Form;

<Component
  render={(renderProps) => {
    return (
      <AnotherComponent {...renderProps} />
    )
  }}
/>
