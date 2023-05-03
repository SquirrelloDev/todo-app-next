import {Todo, TodoPostData} from "@/types/types";
import {useState} from "react";

const useTodo = (todos:Todo[]) => {
    const [todoItems, setTodoItems] = useState<Todo[]>(todos);
    const getUpdatedTodos = async () => {
        const res = await fetch('/api/todos');
        const data = await res.json();
        return data;
    }
    const addTodo = async (todoData:TodoPostData) => {
        console.log('logging')
        const tempRandID = (Math.random() * 36000).toString(16);

        const cacheTodo:Todo = {
            id: tempRandID,
            name: todoData.name,
            status: "active"
        }
        console.log(cacheTodo);
        await fetch('/api/todos', {method: 'POST', body: JSON.stringify(todoData), headers:{'Content-Type': 'application/json'}});
        setTodoItems(await getUpdatedTodos());
    }
    const deleteTodo = async (id: string) => {
        console.log(id);
        await fetch(`/api/todos/${id}`, {method: 'DELETE', body: JSON.stringify({id: id}), headers:{'Content-Type': 'application/json'}});
      // const info = await res.json();
      // console.log(info);
      setTodoItems(await getUpdatedTodos())
    }
    const setStatus = async (todoData:Todo) => {
      const cacheTodo:Todo = {
          id: todoData.id,
          name: todoData.name,
          status: todoData.status === "active" ? "completed" : "active"
      }
      let updatatedTodos:Todo[];
      const todoIdx = todoItems.findIndex(todoItem => todoItem.id === cacheTodo.id);
      updatatedTodos = [...todoItems];
      updatatedTodos[todoIdx] = cacheTodo;
      await fetch(`/api/todos/${cacheTodo.id}`, {method: 'PUT', body: JSON.stringify(cacheTodo), headers:{'Content-Type': 'application/json'}});
      setTodoItems(updatatedTodos);
    }
    return {todoItems, addTodo, deleteTodo, setStatus}
}
export default useTodo;