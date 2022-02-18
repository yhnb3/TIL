import React, { useState } from "react";

export default function Controlled() {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState(
    "Please write an essay about your favorite DOM element."
  );

  function handleSubmit(event) {
    alert(`name : ${name}, essay: ${essay}`);
    event.preventDefault();
  }
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleEssayChange(event) {
    setEssay(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} onChange={handleEssayChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
