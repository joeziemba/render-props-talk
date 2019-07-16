import React from "react";

const Input = props => {
  return (
    <React.Fragment>
      <input type="text" {...props} placeholder={props.name} className={`${props.isValid && props.attempted ? "valid" : ""} ${!props.isValid && props.attempted ? "invalid" : ""}`} />
      {!props.isValid && props.attempted ? <p className="error-message">{props.errorMessage}</p> : null}
    </React.Fragment>
  );
};

export default Input;
