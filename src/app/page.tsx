import { getAllTodos } from "../../api";
import AddTask from "./components/AddTask";
import Todolist from "./components/Todolist";

export default async function Home() {
  const tasks = await getAllTodos();
  // console.log(tasks)

  return (
    <main className="max-w-4xl mx-auto pt-4 h-screen">
      <div className="text-center my-5 flex-col gap-4">
        <h1 className="text-2xl font-bold">Les't go To Do</h1>
        
        <AddTask />
        <Todolist tasks={tasks}/>
      </div>
    </main>
  );
}
