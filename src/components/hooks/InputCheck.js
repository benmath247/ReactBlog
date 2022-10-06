import { useState, useEffect } from 'react'
import isAlpha from 'validator'
import ErrorMessage from '../Error/ErrorMessage'

function useInputCheck(placeholder) {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    useEffect(() => {
        if (onBlur || (onFocus && input.length > 1)) {
            if (input.length === 0) {
                setError(`${placeholder} name cannot be empty`)
            }
            else if (!isAlpha(input)) {
                setError(`${placeholder} cannot have special characters`)
            } else { setError(false) }
        }
    }, [input, onBlur, onFocus])

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return [input, handleOnChange, error, setOnBlur, setOnFocus]

}

export default useInputCheck;