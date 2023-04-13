
import { useEffect } from 'react'
import './style.css'
import { useLocalStorage } from '../../util/useLocalStorage'
import detectDarkMode from '../../util/detectDarkMode'
import sun from './sun.svg'
import moon from './moon.svg'



const BtbDarkMode = () => {
    
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    const toggleDarkMode = () => {
        setDarkMode((currentValue)=>{
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    useEffect(()=>{
        if (darkMode==='dark') {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }, [darkMode])

    useEffect(()=>{
            window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";

            setDarkMode(newColorScheme)
        });
    }, [setDarkMode])

    const btnNormal = 'dark-mode-btn'
    const btnActive = 'dark-mode-btn dark-mode-btn--active'

    return ( 
        <button className={darkMode==='dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        </button>
    );
}
 
export default BtbDarkMode;