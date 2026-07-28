import React, { useState } from "react";

const FormInput = ({
  label,
  type,
  placeholder,
  required = false,
  onChange,
  value,
  validator,
  name,
  error,
  resetError,
  leftIcon,
  rightIcon,
}) => {
  const [isValid, setIsValid] = useState({ isValid: true, msg: "" });

  const handleInputChange = (event) => {
    const inputValue = event.target.value;

    const response = validator
      ? validator(inputValue)
      : { isValid: true, msg: "" };

    setIsValid(response);
    if (onChange) {
      onChange(inputValue);
    }
  };

  const hasError = error || (!isValid?.isValid && isValid?.msg);

  return (
    <div className="flex flex-col">
      {label && (
        <label className="block mb-1.5 text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-3.5 flex items-center justify-center pointer-events-none text-gray-500">
            {leftIcon}
          </div>
        )}
        <input
          onFocus={resetError}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          required={required}
          className={`w-full py-2.5 px-3.5 text-slate-800 bg-white border ${
            hasError
              ? "border-rose-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-200"
              : "border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
          } rounded-lg text-sm transition outline-none ${
            leftIcon ? "pl-10" : ""
          } ${rightIcon ? "pr-10" : ""}`}
        />
        {rightIcon && (
          <div className="absolute right-3.5 flex items-center justify-center cursor-pointer text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>
      {hasError && (
        <span className="mt-1.5 text-xs text-rose-500 font-normal">
          {error || isValid?.msg}
        </span>
      )}
    </div>
  );
};

export default FormInput;
