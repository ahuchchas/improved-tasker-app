export function taskReducer(tasks, action) {
  switch (action.type) {
    case "added_task":
      return [...tasks, action.payload];

    case "edited_task":
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return { ...t };
        }
      });

    case "fav_toggled":
      return tasks.map((t) => {
        if (t.id === action.payload.id) {
          return {
            ...t,
            isFavourite: !t.isFavourite,
          };
        } else {
          return { ...t };
        }
      });

    case "deleted_task":
      return tasks.filter((t) => t.id !== action.payload.id);

    case "deleted_all_task":
      return [];
  }
}
