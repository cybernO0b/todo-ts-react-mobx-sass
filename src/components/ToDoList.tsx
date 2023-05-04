import React, { useEffect, useState } from 'react';
import { useObserver } from 'mobx-react-lite';
import { todoStore } from '../store/todoStore';
import { AddTodo } from './AddTodo';
import "../assets/style1.scss";

const TodoList: React.FC = () => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  const [showAddPopup, setShowAddPopup] = useState(false);

  
  return useObserver(() => (
    <div>
      <AddTodo addTodo={todoStore.addTodo} />
      <h1>Todo List</h1>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            <button>Delete Todo</button>
            
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default TodoList;