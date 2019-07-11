import React from "react";

const Validator = props => {
  let errorMessage = "";
  let isValid = props.value !== "";
  if (!isValid) {
    errorMessage = "This field is required";
  }

  // if (isValid && props.email) {
  //   isValid = props.value.match(
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  //   );
  //   if (!isValid) {
  //     errorMessage = "Must enter an email";
  //   }
  // }

  return props.render({ isValid, errorMessage });
};

export default Validator;
