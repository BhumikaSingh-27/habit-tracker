import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import Label from "./pages/label/Label";
import SignUp from "./pages/signup/SignUp";
import Archive from "./pages/archive/Archive";
import Home from "./pages/home/Home";
import Trash from "./pages/trash/Trash";
import ProfilePage from "./pages/profilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Sidebar />
        {/* <Label /> */}
        <Routes>
          <Route path="/" element={<Label />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/archive" element={<Archive />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/trash" element={<Trash />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/labels" element={<Label />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
