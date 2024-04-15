import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

const TodoContainer = () => {
  return (
    <div className="w-1/2 h-screen   mt-[5%]  text-white  rounded-lg  ">
      <h1 className="mt-5 text-center text-3xl font-serif font-bold">
        Get Things Done!
      </h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default TodoContainer;
