import React from 'react'
import './Error.css'

function ErrorMessage({ errorMessage }) {
    return (
        <div className="error-container">
            <span>
                {errorMessage}
            </span>
        </div>
    )
}

export default ErrorMessage