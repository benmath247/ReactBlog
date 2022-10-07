import { useState, useEffect } from 'react'
import { isEmail } from 'validator'

function useEmailCheck(placeholder) {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    useEffect(() => {
        if (onBlur || (onFocus && input.length > 1)) {
            if (input.length === 0) {
                setError(`${placeholder} cannot be empty`)
            }
            else if (!isEmail(input)) {
                setError(`You must enter a valid email`)
            } else { setError(false) }
        }
    }, [input, onBlur, onFocus])

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return [input, handleOnChange, error, setOnBlur, setOnFocus]

}

export default useEmailCheck;