import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";

//For multiple componnets rendering with one route use this method
const HomeWithHeader = () => (
  <>
    <Header />
    <Home />
  </>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path= "/" element={<Login />}></Route>
          <Route exact path= "/home" element={<HomeWithHeader />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;