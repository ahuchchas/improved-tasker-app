/* eslint-disable react/prop-types */
export default function TaskRow({ task, onFav, onDelete, onEdit }) {
  function confirmDelete() {
    const isConfirmed = window.confirm(
      `Are you sure to delete the task "${task.title}"?`
    );

    if (isConfirmed) {
      onDelete(task);
    }
  }

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <svg
          onClick={() => onFav(task)}
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke={task.isFavourite ? "yellow" : "currentColor"}
          fill={task.isFavourite ? "yellow" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      </td>
      <td>{task.title}</td>
      <td>
        <div>{task.description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {task.tags.map((tag, i) => (
            <li key={i}>
              <span
                className={`inline-block h-5 whitespace-nowrap rounded-[45px] ${
                  i % 2 ? "bg-[#1fa4c5a1]" : "bg-[#671ec7ce]"
                } px-2.5 text-sm capitalize text-[#F4F5F6]`}
              >
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{task.priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button className="text-red-500" onClick={confirmDelete}>
            Delete
          </button>
          <button className="text-blue-500" onClick={() => onEdit(task)}>
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
}
