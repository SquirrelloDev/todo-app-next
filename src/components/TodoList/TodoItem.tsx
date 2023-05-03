import classes from "@/sass/components/todo_list.module.scss"
import crossImg from '@/images/icon-cross.svg'
import Image from "next/image";
import {useContext, useRef} from "react";
import {themeContext} from "@/context/ThemeProvider";
interface TodoItemProps{
    id: string,
    todoName: string | undefined,
    status: "active" | "completed",
    deleteTodoFn: (id: string) => void,
    changeStatusFn: (id: string) => void
}
const TodoItem = ({id, todoName, status, deleteTodoFn,changeStatusFn}:TodoItemProps) => {
    const {isDarkTheme} = useContext(themeContext);
    const liClass = isDarkTheme ? `${classes.todolist__list__item} ${classes['todolist__list__item--dark']}`: classes.todolist__list__item;
    const textClass = isDarkTheme ? `${classes.box__text} ${classes['box__text--dark']}` : classes.box__text;
    const checkboxClass = isDarkTheme ? `${classes.box__checkbox} ${classes['box__checkbox--dark']}`: classes.box__checkbox;
    const deleteTodoHandler = () => {
      deleteTodoFn(id);
    }
    return (
    <li>
      <div className={liClass}>
        <div className={classes.box}>
          <input type='checkbox' defaultChecked={status === "completed"}  className={checkboxClass}/>
          <p className={textClass}>{todoName}</p>
        </div>
        <button onClick={deleteTodoHandler}><Image src={crossImg} alt={"close button icon"}/></button>
      </div>
    </li>
  )
}
export default TodoItem;