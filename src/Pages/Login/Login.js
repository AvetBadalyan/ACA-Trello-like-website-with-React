import React, { useContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import { useSmartContext, initialValue, ACTION_TYPES } from "../../state/state";
import "./Login.css";

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
    <div>
      <Header />

      <form className="form" onSubmit={submitHandler}>
        <h1 style={{color: "blue"}}> Sign in to the best Task Management Website - TRELLO</h1>
        <div>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            placeholder="enter your e-mail"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            placeholder="enter your password"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
