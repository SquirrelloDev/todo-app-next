import themeMoon from '../images/icon-moon.svg'
import themeSun from '../images/icon-sun.svg'
import Image from "next/image";
const ThemeSwitch = () => {
  return(
      <div>
          <Image src={themeMoon} alt={'theme switcher icon'}/>
      </div>
  )
}
export default ThemeSwitch;