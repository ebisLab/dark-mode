import useLocalStorage from './useLocalStorage';

export const useDarkMode =(key)=>{

    const [values, setValues] = useLocalStorage(key)

}