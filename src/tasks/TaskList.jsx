/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TaskContext } from "../contexts/TasksProvider";
import NoTaskFound from "./NoTaskFound";
import TaskHead from "./TaskHead";
import TaskRow from "./TaskRow";

export default function TaskList({ onFav, onDelete, onEdit }) {
  const { tasks, searchTerm } = useContext(TaskContext);

  const filteredTasks = tasks.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (tasks.length < 1) {
    return <NoTaskFound message={"Task list is empty!"} />;
  } else if (filteredTasks.length < 1) {
    return <NoTaskFound message={"Oops.. No task matched to your search!"} />;
  } else {
    return (
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <TaskHead />
          </thead>
          <tbody>
            {filteredTasks.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onFav={onFav}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
