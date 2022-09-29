import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Task() {
  const [taskData, setTaskData] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState(false);
  const addItem = (e) => {
    e.preventDefault();

    const tempData = [...taskData];
    tempData.push(textInput);
    setTaskData(tempData);
    setTextInput("");
  };

  useEffect(() => {
    if (textInput.length > 100) setError(true);
    else setError(false);
  }, [textInput]);

  const removeItem = (index) => {
    let newData = [...taskData];
    newData.splice(index, 1);
    setTaskData(newData);
  };

  const editItem = (index) => {
    if (error) return;
    let newData = [...taskData];
    newData[index] = textInput;
    setTaskData(newData);
  };

  console.log(taskData);
  return (
    <div>
      <h1>My List</h1>
      <Link className="link" to="/">
        Click here to go to home
      </Link>
      <form className="task form" onSubmit={addItem}>
        <label style={{ fontSize: "40px" }}>
          {" "}
          don't forget:
          <input
            className="task input"
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
          ></input>
        </label>
        <input className="task input" type="submit" value="Submit" />
      </form>
      {error ? <span style={{ color: "red" }}>Error occured</span> : null}
      {taskData.map((item, index) => {
        return (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
            <button onClick={() => editItem(index)}>Update</button>
          </li>
        );
      })}
    </div>
  );
}
export default Task;
