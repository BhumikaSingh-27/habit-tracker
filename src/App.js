import "./App.css";
import HabitCard from "./components/HabitCard/HabitCard";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      {/* <Header />
      <Sidebar /> */}
      <HabitCard />
    </div>
  );
}

export default App;
