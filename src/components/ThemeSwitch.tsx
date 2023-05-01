import themeMoon from '../images/icon-moon.svg'
import themeSun from '../images/icon-sun.svg'
import Image from "next/image";
import {useContext} from "react";
import {themeContext} from "@/context/ThemeProvider";
const ThemeSwitch = () => {
    const {isDarkTheme, changeTheme} = useContext(themeContext);
  return(
      <>
          <Image src={isDarkTheme ? themeSun : themeMoon} alt={'theme switcher button icon'} onClick={changeTheme}/>
      </>
  )
}
export default ThemeSwitch;