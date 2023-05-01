import classes from "@/sass/components/todo_list.module.scss"
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";

const ActionBox = () => {
    const {isDarkTheme} = useContext(themeContext);
    const actionBoxClass = isDarkTheme ? `${classes['todolist__action-box']} ${classes['todolist__action-box--dark']}` : classes['todolist__action-box'];
  return (
      <div className={actionBoxClass}>
          <button className={classes['todolist__action-box__action']}>All</button>
          <button className={classes['todolist__action-box__action']}>Active</button>
          <button className={classes['todolist__action-box__action']}>Completed</button>
      </div>
  )
}
export default ActionBox;