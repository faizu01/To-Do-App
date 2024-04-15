import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/todoslice";
const TaskInput = () => {
  const task = useRef();
  const dispath = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length >= 3) {
      setInputValue("");
      dispath(
        addTask({
          id: Date.now(),
          todo: inputValue,
          status: "ongoing",
          color: "purple",
        })
      );
    } else {
      alert("Task should be minimum of Length-3");
    }
  };

  return (
    <div className="flex">
      <form
        className="md:w-screen  md:flex  md:justify-center mt-[5%]"
        onSubmit={handleSubmit}
      >
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="What do you want to do today?"
          className="md:w-[65%] w-full py-2 px-2  border-blue-600 border-2 bg-transparent "
        />
        <button
          type="submit"
          className="md:ml-1 md:px-2 md:mt-0 md:p-0 mt-3 p-1 bg-purple-900 rounded-md"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TaskInput;
