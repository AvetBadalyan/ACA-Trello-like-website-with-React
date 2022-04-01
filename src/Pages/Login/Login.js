import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSmartContext, initialValue, ACTION_TYPES } from "../../state/state";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const { dispatch } = useSmartContext();
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim().length > 8 && enteredEmail.includes("@")) {
      setFormIsValid(() => (formIsValid = true));
      dispatch({ type: ACTION_TYPES.IS_LOGEDIN });
      navigate("/boards");
    } else {
      navigate("/");
    }
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">e-mail</label>
        <input
          type="email"
          id="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />
      </div>
      <input type="submit" value="Login"/> 
    </form>
  );
};

export default Login;
