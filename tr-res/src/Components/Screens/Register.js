import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import DatePicker from "react-datepicker";

const Register = () => {
  const navigate = useNavigate();
  const [fname, setFname] = React.useState("");
  const [mname, setMname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [lang, setLang] = React.useState("");
  const [phno, setPhno] = React.useState("");
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [Pass, setPass] = React.useState("");
  const [address, setAline] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [gender, setGender] = React.useState("male");
  const [nationality, setNationality] = React.useState("Indian");

  const Postdata = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        mname,
        lname,
        lang,
        phno,
        user,
        email,
        Pass,
        address,
        city,
        state,
        pin,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          // M.toast({ html: data.error, classes: "#d32f2f red darken-2" });
          return (
            <Alert variant="filled" severity="error">
              {{ html: data.error }}
            </Alert>
          );
        }
        if (
          !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          )
        ) {
          return (
            <Alert variant="filled" severity="error">
              {{ html: "invalid email" }}
            </Alert>
          );
        } else {
          navigate("/signin");
          return (
            <Alert variant="filled" severity="error">
              {{ html: data.error }}
            </Alert>
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <form>
        <fieldset>
          <legend className="bund">Create Account</legend>
          <ul>
            <li>
              <label for="Firstname">FirstName: </label>
              <input
                type="text"
                id="FirstName"
                required
                onChange={(e) => {
                  setFname(e.target.value());
                }}
                value={fname}
              />
            </li>
            <li>
              <label for="MiddleName">MiddleName:</label>
              <input
                type="text"
                id="MiddleName"
                onChange={(e) => {
                  setMname(e.target.value());
                }}
                value={mname}
              />
            </li>
            <li>
              <label for="LastName">LastName:</label>
              <input
                type="text"
                id="LastName"
                onChange={(e) => {
                  setLname(e.target.value());
                }}
                value={lname}
              />
            </li>

            <li>
              <label for="dob">Date of Birth: </label>
              <DatePicker id="dob" />
            </li>

            <li>
              <section class="light">
                <h1>SEX</h1>

                <label className="gender">
                  <input
                    type="radio"
                    name="light"
                    checked
                    onClick={() => {
                      setGender("male");
                    }}
                  />
                  <span class="design"></span>
                  <span class="text">Male</span>
                </label>

                <label className="gender">
                  <input
                    type="radio"
                    name="light"
                    onClick={() => {
                      setGender("female");
                    }}
                  />
                  <span class="design"></span>
                  <span class="text">Female</span>
                </label>
              </section>
            </li>

            <li>
              <label for="Language">Prefered Language</label>
              <input
                type="text"
                id="Language"
                required
                onChange={(e) => {
                  setLang(e.target.value());
                }}
                value={lang}
              />
            </li>

            <li>
              <label for="phno">Phone Number</label>
              <input
                type="text"
                id="phno"
                required
                onChange={(e) => {
                  setPhno(e.target.value());
                }}
                value={phno}
              />
            </li>

            <li>
              <section class="light">
                <h1>Nationality</h1>

                <label className="Indian">
                  <input
                    type="radio"
                    name="light"
                    checked
                    onClick={() => {
                      setNationality("Indian");
                    }}
                  />
                  <span class="design"></span>
                  <span class="text">Indian</span>
                </label>

                <label className="Other">
                  <input
                    type="radio"
                    name="light"
                    onClick={() => {
                      setNationality("Other");
                    }}
                  />
                  <span class="design"></span>
                  <span class="text">Other</span>
                </label>
              </section>
            </li>

            <li>
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                required
                onChange={(e) => {
                  setUser(e.target.value());
                }}
                value={user}
              />
            </li>
            <li>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value());
                }}
                value={email}
              />
            </li>
            <li>
              <label for="password">Password:</label>
              <input type="password" id="password" required />
            </li>
            <li>
              <label for="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                required
                onChange={(e) => {
                  setPass(e.target.value());
                }}
                value={Pass}
              />
            </li>

            <h1>Address</h1>

            <li>
              <label for="ALine">Address Line</label>
              <input
                type="text"
                id="ALine"
                required
                onChange={(e) => {
                  setAline(e.target.value());
                }}
                value={address}
              />
            </li>
            <li>
              <label for="city">City:</label>
              <input
                type="text"
                id="city"
                required
                onChange={(e) => {
                  setCity(e.target.value());
                }}
                value={city}
              />
            </li>
            <li>
              <label for="State">State:</label>
              <input
                type="text"
                id="State"
                required
                onChange={(e) => {
                  setState(e.target.value());
                }}
                value={state}
              />
            </li>
            <li>
              <label for="Pincode">Pincode:</label>
              <input
                type="text"
                id="Pincode"
                required
                onChange={(e) => {
                  setPin(e.target.value());
                }}
                value={pin}
              />
            </li>
          </ul>
        </fieldset>
        <button
          onClick={() => {
            Postdata();
          }}
        >
          Submit
        </button>
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

export default Register;
