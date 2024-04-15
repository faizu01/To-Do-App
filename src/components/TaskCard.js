import React, { useRef } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addTask, deleteTask, updateTask } from "../utils/todoslice";

const TaskCard = ({ Data }) => {
  const dispatch = useDispatch();
  const [toggleEdit, setToggleEdit] = useState(false);
  const [todoText, setTodoText] = useState(Data.todo);
  const [isCompleted, setIsCompleted] = useState(false);
  const handleTaskUpdate = () => {
    dispatch(updateTask({ ...Data, todo: todoText }));
    setToggleEdit(!toggleEdit);
  };
  const handleCompleted = () => {
    setIsCompleted(!isCompleted);
  };
  const handleCancel = () => {
    setToggleEdit(!toggleEdit);
  };
  const handleEdit = () => {
    setToggleEdit(!toggleEdit);
  };
  const handleDelete = () => {
    dispatch(deleteTask(Data.id));
  };
  return (
    <div
      className={`py-3 my-2 flex bg-${Data.color}-900 ${
        isCompleted && "line-through opacity-70"
      } `}
    >
      <div className="w-[85%] flex ">
        <input type="checkbox" className="mx-2" onClick={handleCompleted} />
        {!toggleEdit ? (
          <h1 className="">{Data.todo}</h1>
        ) : (
          <input
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            className="bg-transparent text-white w-[90%] border-2 "
          />
        )}
      </div>
      {!isCompleted && (
        <div className="space-x-4 cursor-pointer">
          {!toggleEdit ? (
            <>
              <FontAwesomeIcon
                icon={faEdit}
                className=" hover:transform hover:scale-125 hover:duration-500"
                onClick={handleEdit}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className=" hover:transform hover:scale-125 hover:duration-500"
                onClick={handleDelete}
              />
            </>
          ) : (
            <>
              <button className="p-1 rounded" onClick={handleTaskUpdate}>
                ✔️
              </button>
              <button className="p-1 rounded" onClick={handleCancel}>
                ❌
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TaskCard;
