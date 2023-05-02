import Header from "@/components/Header";
import TodoList from "@/components/TodoList/TodoList";
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";

const MainApp = () => {
    const {isDarkTheme} = useContext(themeContext);
  return (
      <main className={isDarkTheme ? 'dark' : ''}>
          <Header/>
          <TodoList/>
      </main>

  )
}
export default MainApp;