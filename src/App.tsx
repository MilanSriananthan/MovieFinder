import { useEffect, useState } from "react";
import MainView from "./components/MainView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginModel from "./components/LoginModel";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<MainView />} />
          <Route path="/" element={<LoginModel login={true} />} />
          <Route path="/signup" element={<LoginModel login={false} />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
