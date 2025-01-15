import { useState } from "react";
import Input from "./Input";

export default function Login() {
  // const [enteredEmail, setEnteredEmail] = useState('')
  // const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValues);
  };

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  // const handleEmailChange = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  const handleReset = () => {
    setEnteredValues((prevValues) => ({
      email: "",
      password: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          value={enteredValues.email}
          onChange={(event) => handleInputChange("email", event.target.value)}
          error={emailIsInvalid && 'Please Enter a Valid Email!'}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          error={passwordIsInvalid && 'Please Enter a Valid Password!'}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
