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
  {
    id: crypto.randomUUID(),
    title: "Buying pens",
    description:
      "Buy some color pen and some regular black pens when I go to market",
    tags: ["Color pen", "Black pen"],
    priority: "Low",
    isFavourite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Painting the house",
    description: "Get a painter within this month to paint the house",
    tags: ["Paint", "House", "This month"],
    priority: "Medium",
    isFavourite: false,
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
