import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mockman from "mockman-js";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import Label from "./pages/label/Label";
import SignUp from "./pages/signup/SignUp";
import Archive from "./pages/archive/Archive";
import Home from "./pages/home/Home";
import Trash from "./pages/trash/Trash";
import ProfilePage from "./pages/profilePage/ProfilePage";
import LandingPage from "./pages/landing/LandingPage";
import store from "./redux/Store";
import { useSelector } from "react-redux";

function App() {
  const storeData = useSelector(state =>state.auth)
  console.log(storeData)
  return (
    <div className="App">
      {storeData.encodedToken && <Header />}
      <div className="section">
        {storeData.encodedToken && <Sidebar />}
        {/* <Label /> */}
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/labels" element={<Label />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/mockman" element={<Mockman />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
