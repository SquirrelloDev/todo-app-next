import TodoItem from "@/components/TodoList/TodoItem";
import classes from "@/sass/components/todo_list.module.scss"
import ActionBox from "@/components/ActionBox";
import {useContext, useState} from "react";
import {themeContext} from "@/context/ThemeProvider";
import {MongoClient} from "mongodb";
import {SortType, Todo} from "@/types/types";
import useTodo from "@/hooks/use-todo";
interface TodolistProps {
    todos: Todo[],
    deleteTodoFn: (id: string) => void,
    changeStatusFn: (todoData: Todo) => void,
    clearCompletedHandler: () => void
}

const TodoList = ({todos, deleteTodoFn, changeStatusFn, clearCompletedHandler}:TodolistProps) => {
    const {isDarkTheme} = useContext(themeContext);
    const [sortType, setSortType] = useState<number>(0);
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
              {todos.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} status={todoItem.status} todoName={todoItem.name} deleteTodoFn={deleteTodoFn} changeStatusFn={changeStatusFn}/>)}
          </ul>
          <div className={summaryClass}>
              <span className={leftClass}>{todos.length} items left</span>
              <div className={classes.todolist__summary__actions}>
                  <button id={'all'} className={sortType !== 0 ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>All</button>
                  <button id={'active'} className={sortType !== 1 ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Active</button>
                  <button id={'completed'} className={sortType !== 2 ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Completed</button>
              </div>
              <span onClick={clearCompletedHandler} className={clearClass}>Clear completed</span>
          </div>
          <ActionBox sortType={sortType} setSortType={setSortType}/>
          <p className={classes.todolist__info}>Drag and drop to reorder list</p>
      </div>
  )
}

export default TodoList;