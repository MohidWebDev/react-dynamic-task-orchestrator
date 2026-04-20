import { useState } from "react";

const AddToDo = ({ setToDo }) => {
  const [currentToDo, setCurrentToDo] = useState("");

  function handleAddToDo(e) {
    e.preventDefault();

    setToDo((prev) => {
      return [...prev, currentToDo];
    });

    setCurrentToDo("");
  }
  return (
    <div>
      <div>
        <form onSubmit={handleAddToDo}>
          <input
            type="text"
            value={currentToDo}
            placeholder="Enter TODOs"
            onChange={(e) => {
              setCurrentToDo(e.target.value);
            }}
          />
          <br />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};
export default AddToDo;
