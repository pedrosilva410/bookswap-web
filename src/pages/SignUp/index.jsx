import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import AccountApi from "../../js/account-api";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [classUserName, setClassUserName] = useState("input");
  const [classEmail, setClassEmail] = useState("input");
  const [classPassword, setClassPassword] = useState("input");
  const [classConfirmPassword, setClassConfirmPassword] = useState("input");
  const defaultbio = "Add a bio";
  const defaultContact = "Add a phone number";

  const history = useHistory();

  const handleClick = () => {
    if (
      userName === "" &&
      email === "" &&
      password === "" &&
      confirmPassword === ""
    ) {
      setClassUserName("error");
      setClassEmail("error");
      setClassPassword("error");
      setClassConfirmPassword("error");
    } else if (userName === "") {
      setClassUserName("error");
      if (email === "") {
        setClassEmail("error");
      }
      if (password === "") {
        setClassPassword("error");
      }
      if (confirmPassword === "") {
        setClassConfirmPassword("error");
      }
    } else if (email === "") {
      setClassEmail("error");
      if (password === "") {
        setClassPassword("error");
      }
      if (confirmPassword === "") {
        setClassConfirmPassword("error");
      }
    } else if (password === "") {
      setClassPassword("error");
      if (confirmPassword === "") {
        setClassConfirmPassword("error");
      }
    } else if (confirmPassword === "") {
      setClassConfirmPassword("error");
    } else {
      if (password === confirmPassword) {
        AccountApi.createAccount(
          userName,
          email,
          password,
          defaultbio,
          defaultContact
        );
        history.push("/");
      } else {
        alert("passwords are different");
        setClassConfirmPassword("error");
        setClassPassword("error");
      }
    }
  };

  return (
    <main>
      <h1 className="signup__title">Sign Up</h1>
      <form
        className="signup__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          onChange={(event) => {
            setUserName(event.target.value);
            if (event.target.value !== "") {
              setClassUserName("input");
            }
          }}
          value={userName}
          className={classUserName}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(event) => {
            setEmail(event.target.value);
            if (event.target.value !== "") {
              setClassEmail("input");
            }
          }}
          value={email}
          className={classEmail}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
            if (event.target.value !== "") {
              setClassPassword("input");
            }
          }}
          value={password}
          className={classPassword}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(event) => {
            setConfirmPassword(event.target.value);
            if (event.target.value !== "") {
              setClassConfirmPassword("input");
            }
          }}
          value={confirmPassword}
          className={classConfirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
        <button className="signup__button" onClick={() => handleClick()}>
          Sign Up
        </button>
      </form>
    </main>
  );
}
