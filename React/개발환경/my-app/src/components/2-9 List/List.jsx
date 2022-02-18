import React from "react";

export default function List() {
  const todos = [
    {
      id: 1,
      text: "drink water",
    },
    {
      id: 2,
      text: "wash car",
    },
    {
      id: 3,
      text: "listen lecture",
    },
    {
      id: 4,
      text: "go to bed",
    },
  ];
  const Item = (props) => {
    return <li>{props.text}</li>;
  };
  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
  return <div>{todoList}</div>;
}
