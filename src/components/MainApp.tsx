import Header from "@/components/Header";
import TodoList from "@/components/TodoList/TodoList";
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
import useTodo from "@/hooks/use-todo";
import {Todo} from "@/types/types";

const MainApp = ({todos}) => {
    const {isDarkTheme} = useContext(themeContext);
    const {todoItems, addTodo, deleteTodo} = useTodo<Todo>(todos);
  return (
      <main className={isDarkTheme ? 'dark' : ''}>
          <Header addTodoHandler={addTodo}/>
          <TodoList todos={todoItems} deleteTodoFn={deleteTodo}/>
      </main>

  )
}
export default MainApp;