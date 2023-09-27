import axios from "axios";
import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001/tasks";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const todos = await axios.get(baseUrl, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
    return todos.data;
  } catch (error) {
    console.error("Error get data task:", error);
    throw error;
  }
};

export const addTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const newTodo = await axios.post(baseUrl, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return newTodo.data;
  } catch (error) {
    console.error("Error to post task:", error);
    throw error;
  }
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const updatedTodo = await axios.put(`${baseUrl}/${todo.id}`, todo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return updatedTodo.data;
  } catch (error) {
    console.log("Error to edit task:", error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
  } catch (error) {
    console.log("Error to delete task:", error);
    throw error;
  }
};
