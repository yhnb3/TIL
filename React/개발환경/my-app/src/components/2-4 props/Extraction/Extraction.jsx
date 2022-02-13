import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}
function Avatar({ avatarUrl, name }) {
  return <img className="Avatar" src={avatarUrl} alt={name} />;
}

function UserInfo({ author: { avatarUrl, name } }) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={avatarUrl} name={name} />
      <div className="UserInfo-name">{name}</div>
    </div>
  );
}

function Comment({ comment: { author, text, date } }) {
  return (
    <div className="Comment">
      <UserInfo author={author} />
      <div className="Comment-text">{text}</div>
      <div className="Comment-date">{formatDate(date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "https://placekitten.com/g/64/64",
  },
};
export default function Extraction() {
  return <Comment comment={comment} />;
}
