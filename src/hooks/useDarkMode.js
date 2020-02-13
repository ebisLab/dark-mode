import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode =(key, initialValue)=>{

    const [darkModeValue, setDarkModeValue] = useLocalStorage('Dark Mode Toggle', initialValue) //darkmode -> string


    //checking to see if the value to darkmode is true, add/remove class
    useEffect(() => {
      if(darkModeValue === true){
document.querySelector('body').classList.add('dark-mode')
      }else {
          document.querySelector('body').classList.remove('dark-mode')
      }
        
    }, [darkModeValue])

    return [darkModeValue, setDarkModeValue]
}