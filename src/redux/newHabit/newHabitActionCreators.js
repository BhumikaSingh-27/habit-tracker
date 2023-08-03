import {
  ADD_COLOR,
  ADD_END_DATE,
  ADD_GOAL,
  ADD_LABEL,
  ADD_NAME,
  ADD_REPEAT,
  ADD_START_DATE,
  ARCHIVE,
  COMPLETE,
  DELETE,
} from "./newHabitTypes";

export const addName = (data) => {
  return {
    type: ADD_NAME,
    payload: data,
  };
};
export const addStartDate = (data) => {
  return {
    type: ADD_START_DATE,
    payload: data,
  };
};

export const addEndDate = (data) => {
  return {
    type: ADD_END_DATE,
    payload: data,
  };
};
export const addGoal = (data) => {
  return {
    type: ADD_GOAL,
    payload: data,
  };
};
export const addRepeat = (data) => {
  return {
    type: ADD_REPEAT,
    payload: data,
  };
};

export const addColor = (data) => {
  return {
    type: ADD_COLOR,
    payload: data,
  };
};

export const addLabel = (data) => {
  return {
    type: ADD_LABEL,
    payload: data,
  };
};

