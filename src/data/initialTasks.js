export const initalTasks = [
  {
    id: crypto.randomUUID(),
    title: "React project",
    description: "Creating React project using vite and tailwind css",
    tags: ["React", "Vite", "Tailwind"],
    priority: "Medium",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Finish pending task",
    description:
      "Complete the pending task given as assignment using context and reducer",
    tags: ["Context", "Reducer"],
    priority: "High",
    isFavourite: true,
  },
];

/** object structure

    {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        tags: [],
        priority: "",
        isFavourite: true,
    },
*/
