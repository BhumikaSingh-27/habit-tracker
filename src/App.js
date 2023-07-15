import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import HabitCard from "./components/HabitCard/HabitCard";
import CountCard from "./components/countCard/CountCard";
import Profile from "./components/Profile/Profile";
import NewHabit from "./components/newHabit/NewHabit";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <HabitCard /> */}
      {/* <CountCard />
      <Profile /> */}
      {/* <Sidebar /> */}
      <NewHabit />
      {/* <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
