import React, { useEffect, useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskForm from "./TaskForm";
import SearchBar from "./SearchBar";

function App() {
  // Replaced local useState with useContext to fulfill "Replace tasks state"
  const { tasks } = useContext(TaskContext); 

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <SearchBar />
    </div>
  );
}

export default App;