import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
