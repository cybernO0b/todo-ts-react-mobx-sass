import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react-lite';
import { todoStore } from '../store/todoStore';
import { AddTodo } from './AddTodo';


const TodoList: React.FC = () => {
  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  return useObserver(() => (
    <div>
      <AddTodo addTodo={todoStore.addTodo} />
      <h1>Todo List</h1>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} />
            <span>{todo.title}</span>
            
          </li>
        ))}
      </ul>
    </div>
  ));
};

export default TodoList;