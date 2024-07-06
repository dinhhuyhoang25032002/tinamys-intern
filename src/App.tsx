import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./container/HomePage";
import Login from "./container/Login";
 import TestElement from "./component/test/TestElement";
import "./stytles/stytle.scss";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/test" element={<TestElement />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
