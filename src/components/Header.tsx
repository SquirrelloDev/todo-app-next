import classes from "@/sass/pages/todo_page.module.scss";
import ThemeSwitch from "@/components/ThemeSwitch";
import AddTodoForm from "@/components/AddTodoForm";

const Header = () => {
  return(
      <header className={classes.header}>
          <div className={classes.header__head}>
              <h1 className={classes.header__head__heading}>todo</h1>
              <ThemeSwitch/>
          </div>
          <div className={classes['form-box']}>
            <AddTodoForm/>
          </div>
      </header>
  )
}
export default Header;