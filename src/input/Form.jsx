import { useState } from "react";
import FormInput from "./FormInput";
import {
  emailValidation,
  mobileValidation,
  nameValidation,
  passwordValidation,
} from "./Validation";

const Form = () => {
  const [email, setEmail] = useState("code@wave");
  const [fname, setFName] = useState("hh");
  const [mobile, setMobile] = useState("454");
  const [password, setPassword] = useState("..");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    email: "",
    name: "",
    mobile: "",
    password: "",
  });

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleError = (err, field) => {
    setError((prev) => ({ ...prev, [field]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRes = emailValidation(email);
    const nameRes = nameValidation(fname);
    const mobileRes = mobileValidation(mobile);
    const passRes = passwordValidation(password);

    setError({
      email: emailRes.msg,
      name: nameRes.msg,
      mobile: mobileRes.msg,
      password: passRes.msg,
    });

    if (
      emailRes.isValid &&
      nameRes.isValid &&
      mobileRes.isValid &&
      passRes.isValid
    ) {
      alert("Registration successful!");
    }
  };

  return (
    <div className="w-90 sm:w-95 bg-white rounded-2xl shadow-xl p-6 sm:p-7 flex flex-col gap-4 border border-slate-100">
      <h2 className="text-xl font-bold text-slate-800 text-center mb-1">
        Sign Up
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Email Address */}
        <FormInput
          label="Email Address"
          placeholder="email@example.com"
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
          required
          validator={emailValidation}
          name="email"
          error={error.email}
          resetError={() => handleError("", "email")}
          leftIcon={
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />

        {/* Full Name */}
        <FormInput
          label="Full Name"
          placeholder="Full Name"
          type="text"
          value={fname}
          onChange={(text) => setFName(text)}
          required
          validator={nameValidation}
          name="name"
          error={error.name}
          resetError={() => handleError("", "name")}
          leftIcon={
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          }
        />

        {/* Mobile Number */}
        <FormInput
          label="Mobile Number"
          placeholder="Mobile Number"
          type="text"
          value={mobile}
          onChange={(text) => setMobile(text)}
          required
          validator={mobileValidation}
          name="mobile"
          error={error.mobile}
          resetError={() => handleError("", "mobile")}
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
          }
        />

        {/* Password */}
        <FormInput
          label="Password"
          placeholder="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(text) => setPassword(text)}
          required
          validator={passwordValidation}
          name="password"
          error={error.password}
          resetError={() => handleError("", "password")}
          leftIcon={
            <svg
              className="w-4 h-4 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          }
          rightIcon={
            <button
              type="button"
              onClick={handleTogglePassword}
              className="focus:outline-none flex items-center justify-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a8.959 8.959 0 013.682-.792c4.478 0 8.268 2.943 9.542 7a10.025 10.025 0 01-4.132 5.411m-4.092-4.092a3 3 0 11-4.243-4.243m4.242 4.242L3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          }
        />

        {/* Register Button */}
        <button
          type="submit"
          className="mt-2 w-full bg-[#1e61e7] hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-4 rounded-xl text-sm transition duration-150 shadow-md hover:shadow-lg cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Form;
