import classes from "@/sass/components/todo_list.module.scss"
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
import {SortType} from "@/components/TodoList/TodoList";

interface ActionBoxProps {
    sortType: number
    setSortType: (sortType: SortType) => void
}
const ActionBox = ({sortType, setSortType}:ActionBoxProps) => {
    const {isDarkTheme} = useContext(themeContext);
    const actionBoxClass = isDarkTheme ? `${classes['todolist__action-box']} ${classes['todolist__action-box--dark']}` : classes['todolist__action-box'];
    const actionClass = isDarkTheme ? `${classes['todolist__action-box__action']} ${classes['todolist__action-box__action--dark']}` : classes['todolist__action-box__action'];
    const actionClassActive = `${actionClass} ${classes['todolist__action-box__action--active']}`
    const changeSortTypeHandler = (e) => {
        switch(e.target.id){
            case 'all':
                setSortType(SortType.ALL);
                break;
            case 'active':
                setSortType(SortType.ACTIVE);
                break;
            case 'completed':
                setSortType(SortType.COMPLETED);
                break;
        }
    }
  return (
      <div className={actionBoxClass}>
          <button id={'all'} onClick={changeSortTypeHandler} className={sortType !== SortType.ALL ? actionClass : actionClassActive}>All</button>
          <button id={'active'} onClick={changeSortTypeHandler} className={sortType !== SortType.ACTIVE ? actionClass : actionClassActive}>Active</button>
          <button id={'completed'} onClick={changeSortTypeHandler} className={sortType !== SortType.COMPLETED ? actionClass : actionClassActive}>Completed</button>
      </div>
  )
}
export default ActionBox;