import {Todo, TodoPostData} from "@/types/types";
import {useState} from "react";

const useTodo = <T>(todos:T[]) => {
    const [todoItems, setTodoItems] = useState<T[]>(todos);
    const addTodo = (todoData:TodoPostData) => {
        console.log('logging')
        const tempRandID = (Math.random() * 36000).toString(16);

        const cacheTodo:Todo = {
            id: tempRandID,
            name: todoData.name,
            status: "active"
        }
        console.log(cacheTodo)
        fetch('/api/todos', {method: 'POST', body: JSON.stringify(todoData), headers:{'Content-Type': 'application/json'}}).then(res => console.log(res));
        setTodoItems(prevState => [...prevState, cacheTodo])
    }
    return {todoItems, addTodo}
}
export default useTodo;