import inputClasses from "@/sass/components/todo_input.module.scss"
import formClasses from "@/sass/pages/todo_page.module.scss"
const AddTodoForm = () => {
  return(
      <form className={formClasses.header__form}>
          <div className={formClasses['header__form__input-box']}>
              {/*<div className={formClasses['header__form__input-box__circle']}></div>*/}
              <input type='text' placeholder='Create a new todo..' className={inputClasses['todo-input']}/>
          </div>

      </form>
  )
}
export default AddTodoForm;