import React, { useState } from "react";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TaskList = () => {
  const task = useSelector((store) => store.todo.task);
  if (!task) return;
  return (
    <div className="mt-[5%]">
      {task.map((todo, index) => (
        <div key={index} className="md:mx-[5%]">
          <TaskCard Data={todo} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
