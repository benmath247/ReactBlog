import { useState, useEffect } from "react";

function useDOBCheck() {
    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)
    
    function underAgeValidate(birthday){
        var optimizedBirthday = birthday.replace(/-/g, "/");
        var myBirthday = new Date(optimizedBirthday);
        var currentDate = new Date().toJSON().slice(0,10)+' 01:00:00';
    
        // calculate age comparing current date and borthday
        var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));
    
        if(myAge < 18) {
                 return false;
            }else{
            return true;
        }
    
    } 
    useEffect(() => {
        if (onBlur && !underAgeValidate(input)) {
            setError(`Must be 18+`)
        } else {setError(false)}
    }, [input, onBlur, onFocus])

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return [input, handleOnChange, error, setOnBlur, setOnFocus]
}

export default useDOBCheck;