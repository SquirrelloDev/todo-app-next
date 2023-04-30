import classes from "@/sass/pages/todo_page.module.scss";
import ThemeSwitch from "@/components/ThemeSwitch";

const Header = () => {
  return(
      <header className={classes.header}>
          <div className={classes.header__head}>
              <h1 className={classes.header__head__heading}>todo</h1>
              <ThemeSwitch/>
          </div>
          <div>

          </div>
      </header>
  )
}
export default Header;