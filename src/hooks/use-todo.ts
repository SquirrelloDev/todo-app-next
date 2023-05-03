import {Todo, TodoPostData} from "@/types/types";
import {useState} from "react";

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
        // await setTodoItems(data);
        // fetch('/api/todos', {method: 'POST', body: JSON.stringify(todoData), headers:{'Content-Type': 'application/json'}}).then(res =>{
        //     fetch('/api/todos').then(ress => ress.json()).then(data => console.log(data))
        //     }
        // );
        // setTodoItems(prevState => [...prevState, cacheTodo])
    }
    return {todoItems, addTodo}
}
export default useTodo;