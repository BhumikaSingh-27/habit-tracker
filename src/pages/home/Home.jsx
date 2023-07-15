import React from "react";
import "./home.css";
import CountCard from "../../components/countCard/CountCard";
import HabitCard from "../../components/HabitCard/HabitCard";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <div className="home-heading">
          <h1 id="welcome-text">Welcome, Bhumika!</h1>
          <h3>Today</h3>
        </div>
        <div className="count-container">
          <CountCard />
          <CountCard />
          <CountCard />
          <CountCard />
        </div>
        <div>
          <div className="home-heading">
            <h2>My Habits</h2>
            <h3>+Create Habit</h3>
          </div>
          <p>
            <b>ACTIVE</b>
          </p>
          <div className="count-container">
          <HabitCard />
          <HabitCard />
          <HabitCard />
          <HabitCard />
        </div>
        <p>
          <b>COMPLETED</b>
        </p>
        <div className="count-container">
          <HabitCard />
        </div>
        </div>

        
        
      </div>
    </div>
  );
};

export default Home;
