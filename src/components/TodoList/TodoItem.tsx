import classes from "@/sass/components/todo_list.module.scss"
import crossImg from '@/images/icon-cross.svg'
import Image from "next/image";
const TodoItem = () => {
  return (
    <li>
      <div className={classes.todolist__list__item}>
        <div className={classes.box}>
          <input type='checkbox'/>
          <p className={classes.box__text}>My todoitem</p>
        </div>
        <button><Image src={crossImg} alt={"close button icon"}/></button>
      </div>
    </li>
  )
}
export default TodoItem;