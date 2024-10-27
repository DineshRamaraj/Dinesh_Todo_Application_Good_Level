import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = ({
  todoItem,
  setShowMainPage,
  setMainContent,
  setInputHandler,
}) => {
  const { _id, title, description, status } = todoItem;
  //   const updateTodo = () => {};
  //   const deleteTodo = () => {};
  return (
    <>
      <div className="border border-slate-400 rounded-md p-4 flex justify-between items-center w-[100%]">
        <span className="text-slate-800 text-md font-semibold text-[roboto] w-[90%]">
          {title}
        </span>
        <span className="hidden">{description}</span>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => {
              setShowMainPage(true);
              setMainContent("Update");
              setInputHandler({ title, description, status });
              localStorage.setItem("todoId", _id);
            }}
          >
            <MdEdit size={18} color="blue" title="Edit" />
          </button>
          <button
            type="button"
            onClick={() => {
              setShowMainPage(true);
              setMainContent("Delete");
              localStorage.setItem("todoId", _id);
            }}
          >
            <MdDelete size={18} color="red" title="Delete" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
