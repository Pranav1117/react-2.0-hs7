import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatestudentinfo } from "../Reducer/StudentSlice";
import { useSelector } from "react-redux";

const EditStudent = () => {
  const location = useLocation();
  const id = location.state.id;
  console.log(id);
  const info = useSelector((state) => state.studentslice);
  console.log(info);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({
    id: id,
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });
  const handleOnChange = (e) => {
    setStudentData[e.target.name] = e.target.value;
    console.log(studentData);
  };
  const handleUpdate = () => {
    dispatch(updatestudentinfo(studentData));
    navigate("/studentlist");
  };
  return (
    <div>
      <label>Name :</label>
      <input
        type="text"
        name="Name"
        onChange={handleOnChange}
        placeholder={info[id].Name}
      />

      <label>Age :</label>
      <input
        type="text"
        name="Age"
        placeholder={info[id].Age}
        onChange={handleOnChange}
      />

      <label>Course :</label>
      <input
        type="text"
        name="Course"
        onChange={handleOnChange}
        placeholder={info[id].Course}
      />

      <label>Batch :</label>
      <input
        type="text"
        name="Batch"
        onChange={handleOnChange}
        placeholder={info[id].Batch}
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditStudent;
