import {useEffect} from './react'
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode =(key)=>{

    const [darkModeValue, setDarkModeValue] = useLocalStorage(key)

    useEffect(() => {
      if(darkModeValue === true){
document.querySelector('body').classList.add('dark-mode')
      }
        return () => {
            cleanup
        };
    }, [input])

}