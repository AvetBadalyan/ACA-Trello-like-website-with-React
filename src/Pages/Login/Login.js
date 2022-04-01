import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSmartContext, initialValue, ACTION_TYPES } from "../../state/state";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const { dispatch } = useSmartContext();
  console.log(dispatch);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 8
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 8 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 8);
  };

  const goHome = () => {
    if (formIsValid) {
      dispatch({ type: ACTION_TYPES.IS_LOGEDIN });

      navigate("/");
    }
  };



  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   console.log("submit");
  // };

  return (
    <div
      className="form"
      // onSubmit={submitHandler}
    >
      <div>
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <div>
        <button type="submit" disabled={!formIsValid} onClick={goHome}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
