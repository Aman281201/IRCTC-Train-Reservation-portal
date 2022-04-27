import "./App.css";
import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Passenger from "./Components/Screens/Passenger";
import Login from "./Components/Screens/Login"
import Train from "./Components/Screens/Train";

// import Booking from "./Components/Screens/Booking";

function App() {
    return (
        <Router>
            <div className="App">
              <Train/>
            </div>
        </Router>
    );
}

export default App;
