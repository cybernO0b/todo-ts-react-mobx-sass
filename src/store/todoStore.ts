import { makeAutoObservable } from "mobx";
import axios from "axios";

export interface ITodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export class TodoStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      this.todos = response.data;
    } catch (error) {
      console.log(error);
    }
  }

  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  get uncompletedTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }

  toggleCompleted(id: number) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  addTodo = (title: string) => {
    const newTodo = {
      userId: 1,
      id: Date.now(),
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  };

  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export const todoStore = new TodoStore();