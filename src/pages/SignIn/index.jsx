import React, { useState } from "react";
import "./styles.css";
import AuthenticationApi from "../../js/authentication-api";
import { useHistory } from "react-router-dom";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [classUserName, setClassUserName] = useState("input");
  const [classPassword, setClassPassword] = useState("input");
  const history = useHistory();

  const handleClick = () => {
    if (userName === "" && password === "") {
      setClassPassword("error");
      setClassUserName("error");
    } else if (userName === "") {
      setClassUserName("error");
    } else if (password === "") {
      setClassPassword("error");
    } else {
      AuthenticationApi.login(userName, password).then( (response) => {
        if (response.authenticated===false) {
          alert("authentication failed");
        } else {
          console.log("utilizador autenticado");
          localStorage.setItem("loginToken", response.token);
          localStorage.setItem('email', userName);
          history.push("/");
          window.location.reload();
        }
      });
    }
  };

  return (
    <main>
      <h1 className="signin__title">Sign In</h1>

      <form class="signin__form" onSubmit={(event) => event.preventDefault()}>
        <div className="textBox">
          <input
            onChange={(event) => {
                setUserName(event.target.value)
                if(event.target.value !== ""){
                    setClassUserName('input')
                }
            }}
            value={userName}
            className={classUserName}
            type="text"
            placeholder="User Name"
          />
          <input
            onChange={(event) => {
                setPassword(event.target.value)
                if(event.target.value !== ""){
                    setClassPassword('input')
                }
            }}
            value={password}
            className={classPassword}
            type="password"
            placeholder="Password"
          />
        </div>
        <button className="signin__button" onClick={() => handleClick()}>
          Sign In
        </button>
      </form>
    </main>
  );
}
