import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import LoginPage from "./login/LoginPage";
import Label from "./label/Label";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section">
        <Sidebar />
        <Label />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
