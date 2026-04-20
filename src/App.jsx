import { useState } from "react";
import "./App.css";
import AddToDo from "./components/AddToDo";
import DeleteToDo from "./components/DeleteToDo";

function App() {
  const [toDo, setToDo] = useState([]);

  function handleDeleteToDo(indexToDelete) {
    const filteredToDo = toDo.filter((_, index) => index !== indexToDelete);
    setToDo(filteredToDo);
  }

  function handleEditToDo(indexToEdit, newText) {
    setToDo((prev) =>
      prev.map((item, index) => (index === indexToEdit ? newText : item)),
    );
  }

  return (
    <div>
      <h1>TODO List</h1>
      <hr />
      <AddToDo setToDo={setToDo} />

      {toDo.map((td, index) => (
        <DeleteToDo
          key={index}
          task={td}
          onDelete={() => handleDeleteToDo(index)}
          onEdit={(updatedText) => handleEditToDo(index, updatedText)}
        />
      ))}
    </div>
  );
}

export default App;
