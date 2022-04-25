
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// import Radio from '@mui/material/core/Radio'
// import RadioGroup from '@mui/material/core/RadioGroup'
import Log from "./Login.css"



const Login = () => {
  const [uName, setUsername] = useState("");
  const [pass, setPassword] = useState("");


  return (
    <div className='container'>
      <form>
        <fieldset>
          <legend className='bund'>SIGN IN</legend>
          <ul>

            <li>
              <label for="UserName">User Name:</label>
              <input type="text" id="UserName" onChange={(e) => { setUsername(e.target.value()) }} value={uName} />
            </li>
            <li>
              <label for="Password">Password:</label>
              <input type="password" id="LastName" onChange={(e) => { setPassword(e.target.value()) }} value={pass} />
            </li>

          </ul>
        </fieldset>
        <button className='submitButton'> Submit</button>
        <br></br>
        <button className='submitButton' type="button" onClick={() => this.changeView("logIn")}>Have an Account?</button>
      </form>

    </div>
  )
}

export default Login