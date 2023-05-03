import {Todo, TodoPostData} from "@/types/types";
import {useState} from "react";
import {headers} from "next/headers";

const useTodo = <T>(todos:T[]) => {
    const [todoItems, setTodoItems] = useState<T[]>(todos);
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
    return {todoItems, addTodo, deleteTodo}
}
export default useTodo;