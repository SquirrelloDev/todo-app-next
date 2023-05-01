import inputClasses from "@/sass/components/todo_input.module.scss"
import formClasses from "@/sass/pages/todo_page.module.scss"
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
const AddTodoForm = () => {
    const {isDarkTheme} = useContext(themeContext);
    const formBoxClass = isDarkTheme ? `${formClasses['header__form__input-box']} ${formClasses['header__form__input-box--dark']}` : formClasses['header__form__input-box'];
  return(
      <form className={formClasses.header__form}>
          <div className={formBoxClass}>
              {/*<div className={formClasses['header__form__input-box__circle']}></div>*/}
              <input type='text' placeholder='Create a new todo..' className={inputClasses['todo-input']}/>
          </div>

      </form>
  )
}
export default AddTodoForm;