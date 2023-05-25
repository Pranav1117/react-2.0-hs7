import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addnewstudent } from "../Reducer/StudentSlice";
import "../global.css";
const AddNewStudent = () => {
  const dataObj = {
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dataObj[e.target.name] = e.target.value;
    console.log(dataObj);
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    navigate("/studentlist");
    dispatch(addnewstudent(dataObj));
  };
  return (
    <div>
      <h1>AddNewStudent</h1>
      <div className="input-container">
        <label>Name: </label>
        <input
          name="Name"
          onChange={onChangeHandler}
          placeholder="enter your name"
        ></input>

        <label>Age :</label>
        <input name="Age" placeholder="age" onChange={onChangeHandler}></input>

        <label>course :</label>
        <input
          name="Course"
          placeholder="course"
          onChange={onChangeHandler}
        ></input>

        <label>Batch :</label>
        <input
          name="Batch"
          placeholder="batch"
          onChange={onChangeHandler}
        ></input>
      </div>
      <button onClick={ClickHandler}>Submit</button>
    </div>
  );
};

export default AddNewStudent;
