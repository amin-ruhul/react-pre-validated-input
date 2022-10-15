import React, { useState, useEffect } from "react";
import styles from "../style/Input.module.css";

function Select({
  name = "",
  isRequired = false,
  isDisable = false,
  inputContainerStyle = {},
  inputStyle = {},
  errorStyle = {},
  containerClass = "",
  inputClass = "",
  errorClass = "",
  placeholder = "",
  selectOptions = [],
  inputChange = function () {},
}) {
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
    if (isRequired && !input) {
      setError(` ${prefix} is required`);
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
      <select
        className={`${inputClass} ${error.length > 0 && styles.error_border} ${
          valid && styles.success_border
        } `}
        style={{ ...inputStyle }}
        defaultValue={"DEFAULT"}
        name={name}
        disabled={isDisable}
        onChange={(e) => handelInputChange(e.target.value)}
        onBlur={(e) => validateInput(e.target.value)}
      >
        <option value="DEFAULT" disabled>
          {placeholder ? placeholder : `Select ${name}`}
        </option>

        {selectOptions &&
          selectOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
      </select>
      <small
        style={{ ...errorStyle }}
        className={`${errorClass} ${styles.error}`}
      >
        {error && error}
      </small>
    </div>
  );
}

export default Select;
