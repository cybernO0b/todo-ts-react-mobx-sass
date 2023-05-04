import { useState } from "react";
import { observer } from "mobx-react-lite";

interface AddTodoFormProps {
  addTodo: (title: string) => void;
}

export const AddTodo: React.FC<AddTodoFormProps> = observer(({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() !== "") {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
});