import "./App.css";
import React, { useEffect, createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./Reducers/reducer";
import Home from "./Components/Screens/Home";
import Booking from "./Components/Screens/Booking";
import Login from "./Components/Screens/Login";
import Signup from "./Components/Screens/Register";
import {
    BrowserRouter,
    Route,
    Routes,
    Switch,
    useHistory,
} from "react-router-dom";
// import Booking from "./Components/Screens/Booking";
export const UserContext = createContext();

const Routing = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(UserContext);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({ type: "USER", payload: user });
            history.push("/");
        } else {
            history.push("/signin");
        }
    }, {});

    return (
        <Switch>
            <Route>
                <div className="App">
                    <Routes>
                        {/* <Route exact path="/login">{<Login />}</Route> */}
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/booking" element={<Booking />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                    </Routes>
                </div>
            </Route>
        </Switch>
    );
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <BrowserRouter>
                <Routing />

                {/* <Footer /> */}
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
