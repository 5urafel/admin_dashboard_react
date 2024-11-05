import React from "react";
import Topbar from "./assets/components/topbar/Topbar";
import Sidebar from "./assets/components/sidebar/Sidebar";
import Home from "./assets/pages/home/Home";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./assets/pages/userList/UserList";

const App = () => {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
