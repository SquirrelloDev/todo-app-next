import TodoItem from "@/components/TodoList/TodoItem";
import classes from "@/sass/components/todo_list.module.scss"
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
              <span>Tasks: 5</span>
          </div>
      </div>
  )
}
export default TodoList;