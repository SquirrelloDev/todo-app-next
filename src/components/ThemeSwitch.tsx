import themeMoon from '../images/icon-moon.svg'
import themeSun from '../images/icon-sun.svg'
import Image from "next/image";
const ThemeSwitch = () => {
  return(
      <>
          <Image src={themeMoon} alt={'theme switcher icon'}/>
      </>
  )
}
export default ThemeSwitch;