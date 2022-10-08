import { useState, useEffect } from 'react'
import { isAlphanumeric } from 'validator'

function useUsernameCheck(placeholder) {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    useEffect(() => {
        if (onBlur || (onFocus && input.length > 1)) {
            if (input.length === 0) {
                setError(`${placeholder} cannot be empty`)
            }
            else if (!isAlphanumeric(input)) {
                setError(`Username must be alphanumeric`)
            } else { setError(false) }
        }
    }, [input, onBlur, onFocus])

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return [input, handleOnChange, error, setOnBlur, setOnFocus]

}

export default useUsernameCheck;