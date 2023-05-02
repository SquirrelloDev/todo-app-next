import TodoItem from "@/components/TodoList/TodoItem";
import classes from "@/sass/components/todo_list.module.scss"
import ActionBox from "@/components/ActionBox";
import {useContext, useState} from "react";
import {themeContext} from "@/context/ThemeProvider";

export enum SortType {
    ALL,
    ACTIVE,
    COMPLETED
}
const TodoList = () => {
    const {isDarkTheme} = useContext(themeContext);
    const [sortType, setSortType] = useState<number>(SortType.ALL);
    const listClass = isDarkTheme ? `${classes.todolist__list} ${classes['todolist__list--dark']}`: classes.todolist__list;
    const summaryClass = isDarkTheme ? `${classes.todolist__summary} ${classes['todolist__summary--dark']}` : classes.todolist__summary
    const summaryTextClass =  isDarkTheme ? ` ${classes.todolist__summary__actions__action} ${classes['todolist__summary__actions__action--dark']}` : classes.todolist__summary__actions__action;
    const clearClass = isDarkTheme ? `${classes.todolist__summary__clear} ${classes['todolist__summary__clear--dark']}` : classes.todolist__summary__clear
    const leftClass = isDarkTheme ? `${classes.todolist__summary__left} ${classes['todolist__summary__left--dark']}` : classes.todolist__summary__left
    const summaryTextClassActive = `${summaryTextClass} ${classes['todolist__summary__actions__action--active']}`;
    const changeSortTypeHandler = (e) => {
        switch(e.target.id){
            case 'all':
                setSortType(SortType.ALL);
                break;
            case 'active':
                setSortType(SortType.ACTIVE);
                break;
            case 'completed':
                setSortType(SortType.COMPLETED);
                break;
        }
    }

    return (
      <div className={classes.todolist}>
          <ul className={listClass}>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>

          </ul>
          <div className={summaryClass}>
              <span className={leftClass}>5 items left</span>
              <div className={classes.todolist__summary__actions}>
                  <button id={'all'} className={sortType !== SortType.ALL ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>All</button>
                  <button id={'active'} className={sortType !== SortType.ACTIVE ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Active</button>
                  <button id={'completed'} className={sortType !== SortType.COMPLETED ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Completed</button>
              </div>
              <span className={clearClass}>Clear completed</span>
          </div>
          <ActionBox sortType={sortType} setSortType={setSortType}/>
          <p className={classes.todolist__info}>Drag and drop to reorder list</p>
      </div>
  )
}
export default TodoList;