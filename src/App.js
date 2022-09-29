import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Task from "./components/Task";
import "./App.css";

function App() {
  return (
    <div className="App-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
