import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [className, setClassName] = useState("input");
  const [classUsername, setClassUsername] = useState("input");
  const [classEmail, setClassEmail] = useState("input");
  const [classPass, setClassPass] = useState("input");
  const [classConfirmPass, setClassConfirmPass] = useState("input");

  const history = useHistory();

  const handleClick = () => {
    if (
      name === "" &&
      username === "" &&
      email === "" &&
      pass === "" &&
      confirmPass === ""
    ) {
      setClassName("error");
      setClassUsername("error");
      setClassEmail("error");
      setClassPass("error");
      setClassConfirmPass("error");
    } else if (name === "") {
      setClassName("error");
      if (username === "") {
        setClassUsername("error");
      }
      if (email === "") {
        setClassEmail("error");
      }
      if (pass === "") {
        setClassPass("error");
      }
      if (confirmPass === "") {
        setClassConfirmPass("error");
      }
    } else if (username === "") {
      setClassUsername("error");
      if (email === "") {
        setClassEmail("error");
      }
      if (pass === "") {
        setClassPass("error");
      }
      if (confirmPass === "") {
        setClassConfirmPass("error");
      }
    } else if (email === "") {
      setClassEmail("error");
      if (pass === "") {
        setClassPass("error");
      }
      if (confirmPass === "") {
        setClassConfirmPass("error");
      }
    } else if (pass === "") {
      setClassPass("error");
      if (confirmPass === "") {
        setClassConfirmPass("error");
      }
    } else if (confirmPass === "") {
      setClassConfirmPass("error");
    } else {
      history.push("/");
    }
  };

  return (
    <main>
      <form class="signup__form" onSubmit={(event) => event.preventDefault()}>
        <input
          onChange={(event) => {
            setName(event.target.value);
            if (event.target.value !== "") {
              setClassName("input");
            }
          }}
          value={name}
          className={className}
          type="text"
          placeholder="Full Name"
        />
        <input
          onChange={(event) => {
            setUsername(event.target.value);
            if (event.target.value !== "") {
              setClassUsername("input");
            }
          }}
          value={username}
          className={classUsername}
          type="text"
          placeholder="Username"
        />
        <input
          onChange={(event) => {
              setEmail(event.target.value)
              if(event.target.value !== ""){
                setClassEmail('input')
            }
            }}
          value={email}
          className={classEmail}
          type="text"
          placeholder="Email"
        />
        <input
          onChange={(event) => {
              setPass(event.target.value)
              if(event.target.value !== ""){
                setClassPass('input')
            }
            }}
          value={pass}
          className={classPass}
          type="password"
          placeholder="Password"
        />
        <input
          onChange={(event) => {
              setConfirmPass(event.target.value)
              if(event.target.value !== ""){
                setClassConfirmPass('input')
            }
            }}
          value={confirmPass}
          className={classConfirmPass}
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
