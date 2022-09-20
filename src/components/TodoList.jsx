import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";

export const TodoList = ({ taskList, setTaskList }) => {
  const deleteButton = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <div className="todoListArea">
      {taskList.map((task, index) => (
        <div className="todoList" key={index}>
          <div className="todoText">
            <span>{task.text}</span>
          </div>
          <div className="exit_icon">
            <button>
              <BorderColorIcon />
            </button>
          </div>
          <div className="trssh_icon">
            <button onClick={() => deleteButton(task.id)}>
              <SignLanguageIcon />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
