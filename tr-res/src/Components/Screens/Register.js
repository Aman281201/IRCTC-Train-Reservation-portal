import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import DatePicker from "react-datepicker";

const Register = () => {
  const navigate = useNavigate();
  const [dob,setDateOfBirth] = React.useState("")
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
  const [date, setDate] = React.useState("");

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
        dob
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
        <h1>CREATE ACCOUNT</h1>
          <ul>
            <li>
              <label for="Firstname">FirstName: </label>
              <input
                type="text"
                id="FirstName"
                required
                onChange={(e) => {
                  setFname(e.target.value);
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
                  setMname(e.target.value);
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
                  setLname(e.target.value);
                }}
                value={lname}
              />
            </li>

            <li>

              <label for="dob">Date of Birth:(yyyy-mm-dd) </label>
              <input
                type="text"
                id="LastName"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                value={date}
              />
              {/* <DatePicker id="dob" /> */}

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
                  setLang(e.target.value);
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
                  setPhno(e.target.value);
                }}
                value={phno}
              />
            </li>

            <li>
              <section class="light">
                <h1>NATIONALITY</h1>

                <label className="gender">
                  <input
                    type="radio"
                    name="nat"
                    checked
                    onClick={() => {
                      setNationality("Indian");
                    }}
                  />
                  <span class="design"></span>
                  <span class="text">Indian</span>
                </label>

                <label className="gender">
                  <input
                    type="radio"
                    name="nat"
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
              <label for="username">Username:</label>
              <input
                type="text"
                id="username"
                required
                onChange={(e) => {
                  setUser(e.target.value);
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
                  setEmail(e.target.value);
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
                  setPass(e.target.value);
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
                  setAline(e.target.value);
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
                  setCity(e.target.value);
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
                  setState(e.target.value);
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
                  setPin(e.target.value);
                }}
                value={pin}
              />
            </li>
          </ul>
        </fieldset>

        <button
          type="submit"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {
            Postdata();
          }}
        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          Register
        </button>
        <br></br>
        {/* <button
          className="submitButton"
          type="button"
          onClick={() => this.changeView("logIn")}
        >
          Have an Account?
        </button> */}

        <Link to="/login">
          <div className="text-[#3282B8] text-center py-[20px]">
            click here for login
          </div>
        </Link>
      </form>
    </div>
  );
};

export default Register;
