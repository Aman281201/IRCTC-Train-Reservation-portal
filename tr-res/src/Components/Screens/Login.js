import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import Log from "./Login.css";

const Login = () => {
  const [uName, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const Postdata = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        uName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          // M.toast({ html: data.error, classes: "#d32f2f red darken-2" });
          return (
            <Alert variant="filled" severity="error">
              {{ html: data.error }}
            </Alert>
          );
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.token));
          dispatch({ type: "USER", payload: data.user });
          history.push("/");
          return (
            <Alert variant="filled" severity="error">
              {{ html: data.error }}
            </Alert>
            // {{history.push("/")}}
          );
        }
      });

    // .catch((err) => {
    //   console.log(err);
    // });
  };

  return (
    <div className="container">
      <form>
        <fieldset>
          <legend className="bund">SIGN IN</legend>
          <ul>
            <li>
              <label for="UserName">User Name:</label>
              <input
                type="text"
                id="UserName"
                onChange={(e) => {
                  setUsername(e.target.value());
                }}
                value={uName}
              />
            </li>
            <li>
              <label for="Password">Password:</label>
              <input
                type="password"
                id="LastName"
                onChange={(e) => {
                  setPassword(e.target.value());
                }}
                value={pass}
              />
            </li>
          </ul>
        </fieldset>
        <button className="submitButton"> Submit</button>
        <br></br>
        <button
          className="submitButton"
          type="button"
          onClick={() => this.changeView("logIn")}
        >
          Have an Account?
        </button>
      </form>
    </div>
  );
};

export default Login;
