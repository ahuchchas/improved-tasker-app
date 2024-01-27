import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { TaskContext } from "../contexts/TasksProvider";
import AddTaskModal from "./AddTaskModal";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const { dispatch } = useContext(TaskContext);

  function handleAddTask(newTask) {
    if (!taskToUpdate) {
      dispatch({
        type: "added_task",
        payload: newTask,
      });

      toast.success(`The task "${newTask.title}" added successfully.`);
    } else {
      dispatch({
        type: "edited_task",
        payload: newTask,
      });

      setTaskToUpdate(null);
      toast.success(`The task "${newTask.title}" updated successfully.`);
    }
    setShowAddModal(false);
  }

  function handleCancel() {
    setTaskToUpdate(null);
    setShowAddModal(false);
  }

  function handleFav(task) {
    dispatch({
      type: "fav_toggled",
      payload: task,
    });
  }

  function handleEdit(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleDelete(task) {
    dispatch({
      type: "deleted_task",
      payload: task,
    });

    toast.success(`The task "${task.title}" deleted successfully.`);
  }

  function handleDeleteAll() {
    dispatch({
      type: "deleted_all_task",
      payload: null,
    });

    toast.success(`Successfully deleted All the task`);
  }

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {showAddModal && (
            <AddTaskModal
              onSaveTask={handleAddTask}
              onCancel={handleCancel}
              taskToUpdate={taskToUpdate}
            />
          )}
          <TaskActions
            onAdd={() => setShowAddModal(true)}
            onDeleteAll={handleDeleteAll}
          />
          <TaskList
            onFav={handleFav}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </section>
  );
}
