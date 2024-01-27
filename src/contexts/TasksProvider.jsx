/* eslint-disable react/prop-types */
import { createContext, useReducer, useState } from "react";
import { initalTasks } from "../data/initialTasks";
import { taskReducer } from "./../reducers/taskReducer";

export const TaskContext = createContext();

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initalTasks);
  // const [filteredTasks, setFilterdTasks] = useState(tasks);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <TaskContext.Provider
      value={{ tasks, dispatch, searchTerm, setSearchTerm }}
    >
      {children}
    </TaskContext.Provider>
  );
}
