import classes from "@/sass/components/todo_list.module.scss"

const ActionBox = () => {
  return (
      <div className={classes['todolist__action-box']}>
          <button className={classes['todolist__action-box__action']}>All</button>
          <button className={classes['todolist__action-box__action']}>Active</button>
          <button className={classes['todolist__action-box__action']}>Completed</button>
      </div>
  )
}
export default ActionBox;