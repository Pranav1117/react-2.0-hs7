import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const list = [
  { id: 0, Name: "Harry", Age: 21, Course: "MERN", Batch: "October" },
  { id: 1, Name: "John", Age: 22, Course: "MEAN", Batch: "September" },
  { id: 2, Name: "Ross", Age: 25, Course: "MERN", Batch: "October" },
  { id: 3, Name: "Jeff", Age: 23, Course: "MEAN", Batch: "June" },
  { id: 4, Name: "Kiki", Age: 19, Course: "MEAN", Batch: "October" },
  { id: 5, Name: "Steve", Age: 22, Course: "MEAN", Batch: "December" },
  { id: 6, Name: "Tony", Age: 20, Course: "MERN", Batch: "May" },
  { id: 7, Name: "Sid", Age: 22, Course: "MERN", Batch: "October" },
  { id: 8, Name: "Stephen", Age: 21, Course: "MERN", Batch: "July" },
];

const studentSlice = createSlice({
  name: "studentslice",
  initialState: list,
  reducers: {
    addnewstudent: (state, action) => {
      state.push(action.payload);
      console.log(list);
    },

    updatestudentinfo: (state, action) => {
      const { id, Name, Age, Course, Batch } = action.payload;
      const exsistingStudent = list.find((student) => student.id === id);
      console.log(list);
      console.log(exsistingStudent);
      exsistingStudent.Name = Name;
      exsistingStudent.Course = Course;
      exsistingStudent.Batch = Batch;
      exsistingStudent.Age = Age;
    },
  },
});

export const { addnewstudent, updatestudentinfo } = studentSlice.actions;

export const studentReducer = studentSlice.reducer;
