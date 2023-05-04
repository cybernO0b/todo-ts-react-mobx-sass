import { makeAutoObservable } from "mobx";
import axios from "axios";

export interface ITodo {
  id: number;
  
  title: string;
  completed: boolean;
}

export class TodoStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
    this.loadTodos();
  }

  async loadTodos() {
    const response = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos");
    this.todos = response.data;
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

  addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };
    this.todos.push(newTodo);
  };

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



  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

export const todoStore = new TodoStore();