import React from "react";
import "./home.css";
import { connect, useSelector } from "react-redux";
import CountCard from "../../components/countCard/CountCard";
import HabitCard from "../../components/HabitCard/HabitCard";
import { isCreateNewabit } from "../../redux/createHabit/habitActionCreators";

const Home = ({ openModal }) => {
  const {habit} = useSelector((state)=>state.habit)

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
            <h3 onClick={() => openModal()}>+Create Habit</h3>
          </div>
          <p>
            <b>ACTIVE</b>
          </p>
          <div className="count-container">
          {
            habit.map(data => <HabitCard key={data._id} data={data}/>)
          }
            {/* <HabitCard />
            <HabitCard />
            <HabitCard />
            <HabitCard /> */}
          </div>
          <p>
            <b>COMPLETED</b>
          </p>
          <div className="count-container">
            {/* <HabitCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProp = (state) => {
  return {
    ismodal: state.habit.isCreateNewabit,
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    openModal: () => dispatch(isCreateNewabit()),
    closeModal: () => dispatch()
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Home);
