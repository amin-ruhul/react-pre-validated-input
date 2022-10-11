import React, { useState, useEffect } from "react";
import styles from "../style/Input.module.css";
function Input({
  name = null,
  isRequired = false,
  isDisable = false,
  type = "text",
  minLen = 0,
  maxLen = 700,
  inputContainerStyle = {},
  inputStyle = {},
  errorStyle = {},
  containerClass = "",
  inputClass = "",
  errorClass = "",
  validateReg = null,
  inputChange = function () {},
}) {
  // declare state
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(false);

  // return error and value after change
  useEffect(() => {
    inputChange({ value: inputValue, error });
  }, [inputValue, error]);

  // check input field is valid based on condition
  const validateInput = (input) => {
    let prefix = name === null ? "Input" : name;

    var email_pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isRequired && !input) {
      setError(` ${prefix} is required`);
      setValid(false);
    } else if (minLen > input.toString().length) {
      setError(`${prefix} must be greater than ${minLen}`);
      setValid(false);
    } else if (input.toString().length > maxLen) {
      setError(`${prefix} must be smaller than ${maxLen}`);
      setValid(false);
    } else if (validateReg && !new RegExp(validateReg).test(input)) {
      setError(`${prefix} not valid`);
      setValid(false);
    } else if (type === "email" && !email_pattern.test(input)) {
      setError(`${prefix} not valid`);
      setValid(false);
    } else {
      setError("");
      setValid(true);
    }
  };

  // handel input value change
  const handelInputChange = (value) => {
    setInputValue(value);
    validateInput(value);
  };

  return (
    <div
      className={`${containerClass} ${styles.input_container}`}
      style={{ ...inputContainerStyle }}
    >
      <input
        className={`${inputClass} ${error.length > 0 && styles.error_border} ${
          valid && styles.success_border
        } `}
        style={{ ...inputStyle }}
        type={type}
        value={inputValue}
        minLength={minLen}
        maxLength={maxLen}
        disabled={isDisable}
        onChange={(e) => handelInputChange(e.target.value)}
        onBlur={(e) => validateInput(e.target.value)}
      />
      <small
        style={{ ...errorStyle }}
        className={`${errorClass} ${styles.error}`}
      >
        {error && error}
      </small>
    </div>
  );
}

export default Input;
