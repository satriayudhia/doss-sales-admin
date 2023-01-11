import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";

function App() {
  localStorage.setItem("isLogin", true);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Outlet />}>
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
