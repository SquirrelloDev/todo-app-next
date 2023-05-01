import TodoItem from "@/components/TodoList/TodoItem";
import classes from "@/sass/components/todo_list.module.scss"
import ActionBox from "@/components/ActionBox";
const TodoList = () => {
  return (
      <div className={classes.todolist}>
          <ul className={classes.todolist__list}>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>
              <TodoItem/>

          </ul>
          <div className={classes.todolist__summary}>
              <span className={classes.todolist__summary__left}>5 items left</span>
              <div className={classes.todolist__summary__actions}>
                  <button className={classes.todolist__summary__actions__action}>All</button>
                  <button className={classes.todolist__summary__actions__action}>Active</button>
                  <button className={classes.todolist__summary__actions__action}>Completed</button>
              </div>
              <span className={classes.todolist__summary__clear}>Clear completed</span>
          </div>
          <ActionBox/>
          <p className={classes.todolist__info}>Drag and drop to reorder list</p>
      </div>
  )
}
export default TodoList;