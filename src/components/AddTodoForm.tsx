import inputClasses from "@/sass/components/todo_input.module.scss"
import formClasses from "@/sass/pages/todo_page.module.scss"
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
const AddTodoForm = () => {
    const {isDarkTheme} = useContext(themeContext);
    const formBoxClass = isDarkTheme ? `${formClasses['header__form__input-box']} ${formClasses['header__form__input-box--dark']}` : formClasses['header__form__input-box'];
    const inputClass = isDarkTheme ? `${inputClasses['todo-input']} ${inputClasses['todo-input--dark']}` : inputClasses['todo-input'];
    return(
      <form className={formClasses.header__form}>
          <div className={formBoxClass}>
              {/*<div className={formClasses['header__form__input-box__circle']}></div>*/}
              <input type='text' placeholder='Create a new todo..' className={inputClass}/>
          </div>

      </form>
  )
}
export default AddTodoForm;