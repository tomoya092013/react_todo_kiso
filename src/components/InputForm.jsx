import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: Math.random(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const prevent = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="inputForm" onSubmit={prevent}>
        <input
          type="text"
          className="text"
          onChange={handleChange}
          value={inputText}
        />
        <button>
          <TwitterIcon onClick={addTask} />
        </button>
      </form>
    </div>
  );
};
