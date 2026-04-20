import { useState } from "react";

const EditToDo = ({ currentTask, onSave, onCancel }) => {
  const [newText, setNewText] = useState(currentTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() !== "") {
      onSave(newText);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        className="edit-input"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        autoFocus
      />
      <div className="buttons">
        <button type="submit" className="save-btn">
          Save
        </button>
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditToDo;
