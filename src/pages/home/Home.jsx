import React from "react";
import "./home.css";
import { connect, useSelector } from "react-redux";
import CountCard from "../../components/countCard/CountCard";
import HabitCard from "../../components/HabitCard/HabitCard";
import { isCreateNewabit } from "../../redux/createHabit/habitActionCreators";

const Home = ({ openModal }) => {
  const { habit } = useSelector((state) => state.habit);
  const { user } = useSelector((state) => state.auth);
  const habitCompleted = habit?.filter(({ completed }) => completed)
  const countProgress = habit?.filter(({ completed }) => !completed);

  return (
    <div className="home-container">
      <div className="home">
        <div className="home-heading">
          <h1 id="welcome-text">
            Welcome, {user.firstname[0].toUpperCase() + user.firstname.slice(1)}
            !
          </h1>
          <h3>Today</h3>
        </div>
        <div className="count-container">
          <CountCard text={"Completed"} data={habitCompleted.length} />
          <CountCard text={"In Progress"} data={countProgress.length} />
          <CountCard text={"Overdue"} />
          <CountCard text={"Total"} data={habit.length} />
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
            {countProgress.map((data) => (
              <HabitCard key={data._id} data={data} />
            ))}
          </div>
          <p>
            <b>COMPLETED</b>
          </p>
          <div className="count-container">
            {habitCompleted?.map((data) => (
                <HabitCard key={data._id} data={data} />
              ))}
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
    closeModal: () => dispatch(),
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Home);
