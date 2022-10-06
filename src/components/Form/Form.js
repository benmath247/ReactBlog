import React, { useState, useEffect } from "react";
import { isAlpha } from "validator"
import ErrorMessage from "../Error/ErrorMessage";
import "./Form.css";

function Form() {
    const [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState(false)
    const [firstNameOnBlur, setFirstNameOnBlur] = useState(false)
    const [firstNameOnFocus, setfirstNameOnFocus] = useState(false)

    const [lastName, setLastName] = useState("")
    const [lastNameError, setLastNameError] = useState(false)
    const [lastNameOnBlur, setLastNameOnBlur] = useState(false)
    const [lastNameOnFocus, setLastNameOnFocus] = useState(false)

    function handleOnFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    useEffect(() => {
        if (firstNameOnBlur || (firstNameOnFocus && firstName.length > 1)) {
            if (firstName.length === 0) {
                setFirstNameError("First name cannot be empty")
            }
            else if (!isAlpha(firstName)) {
                setFirstNameError("First name cannot have special characters")
            } else { setFirstNameError(false) }
        }
    }, [firstName, firstNameOnBlur])

    function handleOnLastNameChange(e) {
        setLastName(e.target.value);
    }

    useEffect(() => {
        if (lastNameOnBlur || (lastNameOnFocus && lastName.length > 1)) {
            if (lastName.length === 0) {
                setLastNameError("Last name cannot be empty")
            }
            else if (!isAlpha(lastName)) {
                setLastNameError("Last name cannot have special characters")
            } else { setLastNameError(false) }
        }
    })

    return (
        <div className="form-container">
            <div className="form-div">
                <div className="form-h1">
                    <h1>Form</h1>
                </div>

                <form>
                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="First name"
                                name="firstName"
                                value={firstName}
                                onChange={handleOnFirstNameChange}
                                onBlur={() => { setFirstNameOnBlur(true) }}
                                onFocus={() => { setfirstNameOnFocus(true) }}
                            />
                        </div>
                        {firstNameError && <ErrorMessage errorMessage={firstNameError} />}
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Last name"
                                name="lastName"
                                value={lastName}
                                onChange={handleOnLastNameChange}
                                onBlur={() => { setLastNameOnBlur(true) }}
                                onFocus={() => { setLastNameOnFocus(true) }}
                            />
                        </div>
                        {lastNameError && <ErrorMessage errorMessage={lastNameError} />}
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="username"
                                name="username"
                            />
                        </div>
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="email"
                                placeholder="email"
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="password"
                                name="password"
                            />
                        </div>
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="confirm password"
                                name="confirmPassword"
                            />
                        </div>
                    </div>

                    <div className="float-left">
                        <div className="dob-container">
                            <label htmlFor="dob">DOB:</label>

                            <input
                                className="form-input-date"
                                type="date"
                                id="start"
                                name="dob"
                            />
                        </div>
                        <div className="clear"></div>
                    </div>

                    <div className="clear"></div>
                    <div className="form-input-container float-left">
                        <div className="gender-container">
                            <label className="radio-inline">
                                <input type="radio" />
                                male
                            </label>
                            <label className="radio-inline">
                                <input type="radio" />
                                female
                            </label>
                            <label className="radio-inline">
                                <input type="radio" />
                                other
                            </label>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="button-container">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
