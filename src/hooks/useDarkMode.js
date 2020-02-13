import {useEffect} from './react'
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode =(key, initialValue)=>{

    const [darkModeValue, setDarkModeValue] = useLocalStorage(key)

    useEffect(() => {
      if(darkModeValue === true){
document.querySelector('body').classList.add('dark-mode')
      }else {
          document.querySelector('body').classList.remove('dark-mode')
      }
        return [key, initialValue]
    }, [darkModeValue])

}