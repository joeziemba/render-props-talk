import React from "react";

const Input = props => {
  return (
    <React.Fragment>
      <input type="text" {...props} placeholder={props.name} className={props.isValid ? "valid" : "invalid"} />
      {props.isValid ? null : <p className="error-message">{props.errorMessage}</p>}
    </React.Fragment>
  );
};

export default Input;
