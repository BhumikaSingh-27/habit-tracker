import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import HabitCard from "./components/HabitCard/HabitCard";
import CountCard from "./components/countCard/CountCard";
import Profile from "./components/Profile/Profile";
import NewHabit from "./components/newHabit/NewHabit";
import Home from "./pages/home/Home";
import Label from "./pages/label/Label";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Sidebar />
        <Label />
        {/* <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes> */}
      </div>
    </div>
  );
}

export default App;
