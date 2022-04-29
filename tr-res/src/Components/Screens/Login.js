import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Alert from "@mui/material/Alert";
import Log from "./Login.css";

const Login = () => {
  const [uName, setUser] = useState("");
  const [pass, setPassword] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();

  const Postdata = () => {
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pass,
        uName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          // M.toast({ html: data.error, classes: "#d32f2f red darken-2" });
          return;
          // (
          // <Alert variant="filled" severity="error">
          //   {data.error}
          // </Alert>
          //);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.token));
          dispatch({ type: "USER", payload: data.user });
          navigate("/");
          return (
            <Alert variant="filled" severity="error">
              {data.error}
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
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bf-[#BBE1FA]">
      <div class="max-w-md w-full space-y-8">
        <div>
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            SIGN IN TO YOUR ACCOUNT
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                User Name
              </label>
              <input
                value={uName}
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                id="email-address"
                name="email"
                type="text"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="User Name"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={pass}
              />
            </div>
          </div>
          <div>
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
              Sign in
            </button>
          </div>
        </form>
        <Link to="/signup">
          <div className="text-[#3282B8] text-center py-[20px]">
            click here to register
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
