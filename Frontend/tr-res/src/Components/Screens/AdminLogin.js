import { Alert } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
const AdminLogin = () => {
  const [passcode, setpassCode] = React.useState("");
  const [empId, setEmpId] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(localStorage.getItem("empid"));
    if (localStorage.getItem("empid")) {
      navigate("/AdminHome");
    }
  }, []);

  const Postdata = () => {
    fetch("/adminLogin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        empId,
        passcode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          return;
        } else {
          localStorage.setItem("empid", data.token);
          // navigate("/login");
          return <Login />; // <Alert variant="filled" severity="error">
          //   {data.error}
          // </Alert>
          // {{history.push("/")}}
        }
      });
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
            LOGIN AS ADMIN
          </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Employee ID
              </label>
              <input
                value={empId}
                onChange={(e) => {
                  setEmpId(e.target.value);
                }}
                id="email-address"
                name="email"
                type="text"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Employee ID"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Passcode
              </label>
              <input
                onChange={(event) => {
                  setpassCode(event.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Admin Passcode"
                value={passcode}
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                Postdata();
              }}
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#1B262C] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-[#1B262C] group-hover:text-indigo-400"
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
      </div>
    </div>
  );
};

export default AdminLogin;
