import { useState, useEffect } from 'react'

function useConfirmedPasswordCheck(firstPassword) {

    const [confirmedPassword, setConfirmedPassword] = useState("")
    const [error, setError] = useState(false)
    const [onBlur, setOnBlur] = useState(false)
    const [onFocus, setOnFocus] = useState(false)

    useEffect(() => {

        if (onBlur || (onFocus && confirmedPassword.length > 1)) {
            if (confirmedPassword !== firstPassword) {
                setError(`Passwords must match`)
            }
            else { setError(false) }
        }
    }, [confirmedPassword, onBlur, onFocus])

    function handleOnChange(e) {
        setConfirmedPassword(e.target.value);
    }

    return [confirmedPassword, handleOnChange, error, setOnBlur, setOnFocus]

}

export default useConfirmedPasswordCheck;