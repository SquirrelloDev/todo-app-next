import classes from "@/sass/components/todo_list.module.scss"
import crossImg from '@/images/icon-cross.svg'
import Image from "next/image";
const TodoItem = () => {
  return (
    <li>
      <div className={classes.todolist__list__item}>
        <div>
          <input type='checkbox'/>
          <p>My todoitem</p>
        </div>
        <button><Image src={crossImg} alt={"close button icon"}/></button>
      </div>
    </li>
  )
}
export default TodoItem;