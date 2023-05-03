import TodoItem from "@/components/TodoList/TodoItem";
import classes from "@/sass/components/todo_list.module.scss"
import ActionBox from "@/components/ActionBox";
import {useContext, useEffect, useReducer, useState} from "react";
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
    const [todoItems, setTodoItems] = useState<Todo[]>(todos);
    const [sortType, setSortType] = useState<SortType>('all');
    const listClass = isDarkTheme ? `${classes.todolist__list} ${classes['todolist__list--dark']}`: classes.todolist__list;
    const summaryClass = isDarkTheme ? `${classes.todolist__summary} ${classes['todolist__summary--dark']}` : classes.todolist__summary
    const summaryTextClass =  isDarkTheme ? ` ${classes.todolist__summary__actions__action} ${classes['todolist__summary__actions__action--dark']}` : classes.todolist__summary__actions__action;
    const clearClass = isDarkTheme ? `${classes.todolist__summary__clear} ${classes['todolist__summary__clear--dark']}` : classes.todolist__summary__clear
    const leftClass = isDarkTheme ? `${classes.todolist__summary__left} ${classes['todolist__summary__left--dark']}` : classes.todolist__summary__left
    const fallbackClass = isDarkTheme ? `${classes.todolist__list__fallback} ${classes['todolist__list__fallback--dark']}` : classes.todolist__list__fallback
    const summaryTextClassActive = `${summaryTextClass} ${classes['todolist__summary__actions__action--active']}`;


    const changeSortTypeHandler = (e) => {
        setSortType(e.target.id);
    }
    useEffect(() => {
        let filteredTodos = todos;
        if(sortType === 'active' || sortType ==='completed'){
            filteredTodos = todos.filter(todo => todo.status === sortType);
            setTodoItems(filteredTodos);
        }
        else{
            filteredTodos = todos.filter(todo => todo.status !== 'all')
        }
        setTodoItems(filteredTodos)
    }, [sortType, todos])

    return (
      <div className={classes.todolist}>
          <ul className={listClass}>
              {todoItems.map(todoItem => <TodoItem key={todoItem.id} id={todoItem.id} status={todoItem.status} todoName={todoItem.name} deleteTodoFn={deleteTodoFn} changeStatusFn={changeStatusFn}/>)}
              {todoItems.length === 0 && <li className={fallbackClass}>No todos in the {sortType} category :(</li>}
          </ul>
          <div className={summaryClass}>
              <span className={leftClass}>{todos.length} items left</span>
              <div className={classes.todolist__summary__actions}>
                  <button id={'all'} className={sortType !== "all" ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>All</button>
                  <button id={'active'} className={sortType !== "active" ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Active</button>
                  <button id={'completed'} className={sortType !== "completed" ? summaryTextClass : summaryTextClassActive} onClick={changeSortTypeHandler}>Completed</button>
              </div>
              <span onClick={clearCompletedHandler} className={clearClass}>Clear completed</span>
          </div>
          <ActionBox sortType={sortType} setSortType={changeSortTypeHandler}/>
          <p className={classes.todolist__info}>Drag and drop to reorder list</p>
      </div>
  )
}

export default TodoList;