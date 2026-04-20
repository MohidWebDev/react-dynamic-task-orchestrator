import { useState } from "react";
import EditToDo from "./EditToDo";

const DeleteToDo = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = (updatedText) => {
    onEdit(updatedText);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="sub-container">
        {isEditing ? (
          <EditToDo
            currentTask={task}
            onSave={handleUpdate}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <h2>{task}</h2>
            <div className="buttons">
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="delete-btn" onClick={onDelete}>
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DeleteToDo;
