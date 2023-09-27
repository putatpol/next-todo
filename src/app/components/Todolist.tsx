import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "./Task";

interface TodoListProps {
  tasks: ITask[];
}


const Todolist: React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>To do</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <Task key={task.id} task ={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todolist;
