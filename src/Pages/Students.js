import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../global.css";
const Students = () => {
  const navigate = useNavigate();

  const data = useSelector((state) => state.studentslice);

  const ClickHandler = () => {
    navigate("/addnewstudent");
  };

  return (
    <div>
      <div>
        <h2>Students</h2>
      </div>
      <div className="addnewstudent-btn">
        <button onClick={ClickHandler} className="btn">
          Add New Student
        </button>
      </div>

      <table className="">
        <thead>
          <tr className="tr">
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td>
                  <Link to="/editstudent" state={{ id: index }}>
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
