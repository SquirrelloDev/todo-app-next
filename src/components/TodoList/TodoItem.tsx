import classes from "@/sass/components/todo_list.module.scss"
import crossImg from '@/images/icon-cross.svg'
import Image from "next/image";
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
import {is} from "immutable";
const TodoItem = () => {
    const {isDarkTheme} = useContext(themeContext);
    const liClass = isDarkTheme ? `${classes.todolist__list__item} ${classes['todolist__list__item--dark']}`: classes.todolist__list__item;
    const textClass = isDarkTheme ? `${classes.box__text} ${classes['box__text--dark']}` : classes.box__text;
    const checkboxClass = isDarkTheme ? `${classes.box__checkbox} ${classes['box__checkbox--dark']}`: classes.box__checkbox;
    return (
    <li>
      <div className={liClass}>
        <div className={classes.box}>
          <input type='checkbox' className={checkboxClass}/>
          <p className={textClass}>My todoitem</p>
        </div>
        <button><Image src={crossImg} alt={"close button icon"}/></button>
      </div>
    </li>
  )
}
export default TodoItem;