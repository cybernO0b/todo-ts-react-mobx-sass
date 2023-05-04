import { useState } from "react";
import { observer } from "mobx-react-lite";
import "../assets/style1.scss";

interface AddTodoFormProps {
  addTodo: (title: string) => void;
}

export const AddTodo: React.FC<AddTodoFormProps> = observer(({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [showAddPopup, setShowAddPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <>



    
     {/* <form onSubmit={handleSubmit}>
       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
       <button type="submit">Add</button>
     </form> */}


     <button onClick={() => setShowAddPopup(true)}>Add Todo</button>

    {showAddPopup && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <label>
              Todo Title:
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <button type="submit">Add Todo</button>
          </form>
          <button onClick={() => setShowAddPopup(false)}>Close</button>
        </div>
      )}
    </>
  );
});