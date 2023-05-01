import classes from "@/sass/components/todo_list.module.scss"

const ActionBox = () => {
  return (
      <div className={classes['todolist__action-box']}>
          <span className={classes['todolist__action-box__action']}>All</span>
          <span className={classes['todolist__action-box__action']}>Active</span>
          <span className={classes['todolist__action-box__action']}>Completed</span>
      </div>
  )
}
export default ActionBox;