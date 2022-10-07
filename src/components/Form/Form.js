import React, { useState, useEffect } from "react";
import ErrorMessage from "../Error/ErrorMessage";
import "./Form.css";
import useInputCheck from "../hooks/InputCheck";
import useEmailCheck from "../hooks/EmailCheck";
import useUsernameCheck from "../hooks/UsernameCheck";
import usePasswordCheck from "../hooks/PasswordCheck";
import useConfirmedPasswordCheck from "../hooks/ConfirmPasswordCheck";
import useDOBCheck from "../hooks/DOBCheck";

function Form() {
    const [firstName, handleOnFirstNameChange, firstNameError, setFirstNameOnBlur, setFirstNameOnFocus] = useInputCheck("First name")
    const [lastName, handleOnLastNameChange, lastNameError, setLastNameOnBlur, setLastNameOnFocus] = useInputCheck("Last name")
    const [email, handleOnEmailChange, emailError, setEmailOnBlur, setEmailOnFocus] = useEmailCheck("Email")
    const [username, handleOnUsernameChange, usernameError, setUsernameOnBlur, setUsernameOnFocus] = useUsernameCheck("Username")
    const [password, handleOnPasswordChange, passwordError, setPasswordOnBlur, setPasswordOnFocus] = usePasswordCheck()
    const [confirmedPassword, handleConfirmedPasswordOnChange, confirmedPasswordError, setConfirmedPasswordOnBlur, setConfirmedPasswordOnFocus] = useConfirmedPasswordCheck(password)
    const [dob, handleDobOnChange, dobError, setDobOnBlur, setDobOnFocus] =useDOBCheck()

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
                                onFocus={() => { setFirstNameOnFocus(true) }}
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
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={handleOnUsernameChange}
                                onBlur={() => { setUsernameOnBlur(true) }}
                                onFocus={() => { setUsernameOnFocus(true) }}
                            />
                        </div>
                        {usernameError && <ErrorMessage errorMessage={usernameError} />}
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="email"
                                name="email"
                                value={email}
                                onChange={handleOnEmailChange}
                                onBlur={() => { setEmailOnBlur(true) }}
                                onFocus={() => { setEmailOnFocus(true) }}
                            />
                        </div>
                        {emailError && <ErrorMessage errorMessage={emailError} />}
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={handleOnPasswordChange}
                                onBlur={() => { setPasswordOnBlur(true) }}
                                onFocus={() => { setPasswordOnFocus(true) }}
                            />
                        </div>
                        {passwordError && <ErrorMessage errorMessage={passwordError} />}
                    </div>

                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="password"
                                placeholder="confirm password"
                                name="password"
                                value={confirmedPassword}
                                onChange={handleConfirmedPasswordOnChange}
                                onBlur={() => { setConfirmedPasswordOnBlur(true) }}
                                onFocus={() => { setConfirmedPasswordOnFocus(true) }}
                            />
                        </div>
                        {passwordError && <ErrorMessage errorMessage={confirmedPasswordError} />}
                    </div>

                    <div className="float-left">
                        <div className="dob-container">
                            <label htmlFor="dob">DOB:</label>

                            <input
                                className="form-input-date"
                                type="date"
                                id="start"
                                name="dob"
                                value={dob}
                                onChange={handleDobOnChange}
                                onBlur={() => { setDobOnBlur(true) }}
                                onFocus={() => { setDobOnFocus(true) }}
                            />
                        </div>
                        {dobError && <ErrorMessage errorMessage={dobError} />}
                   
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
