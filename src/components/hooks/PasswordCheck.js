import { useState, useEffect } from 'react'
import { isStrongPassword } from 'validator'

function usePasswordCheck() {

    const [input, setInput] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    useEffect(() => {
        if (onBlur || (onFocus && input.length > 1)) {
            if (input.length === 0) {
                setError(`Password cannot be empty`)
            }
            else if (!isStrongPassword(input)) {
                setError(`Password must have a minimum of 1 capital letter, 1 lowercase, and 1 symbol`)
            } else { setError(false) }
        }
    }, [input, onBlur, onFocus])

    function handleOnChange(e) {
        setInput(e.target.value);
    }

    return [input, handleOnChange, error, setOnBlur, setOnFocus]

}

export default usePasswordCheck;