import React from "react";
import Messanger from "./Messanger";
import { useSelector } from "react-redux";
import "./App.css";
import { selectUser } from "./features/usererSlice";
import Login from "./Login";
function App() {
  const user = useSelector(selectUser);
  return <div className="app">{user ? <Messanger /> : <Login />}</div>;
}

export default App;
