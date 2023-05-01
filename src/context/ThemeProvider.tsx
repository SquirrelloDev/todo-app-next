import React, {ReactNode, useEffect, useState} from "react";
type themeCtxType = {
    isDarkTheme: boolean
}
interface ContextProps{
    children: ReactNode
}
export const themeContext = React.createContext<themeCtxType>({
    isDarkTheme: false
});
const ThemeProvider = ({children}: ContextProps) => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(mq);
    }, [])
    const finalValue: themeCtxType = {
        isDarkTheme: isDark
    }
  return (
      <themeContext.Provider value={finalValue}>{children}</themeContext.Provider>
  )
}
export default ThemeProvider;