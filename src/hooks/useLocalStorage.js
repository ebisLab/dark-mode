import React, {useState} from 'react';

export const useLocalStorage = (key, initialValue ='') => {
//setting up state
const [storedValue, setStoredValue]= useState(()=>{
    if(JSON.parse(window.localStorage.getItem(key))){
return JSON.parse(window.localStorage.getItem(key));
    }else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
});

const setValue = value =>{
   window.localStorage.setItem(key, JSON.stringify(value));
};
return [storedValue];
}