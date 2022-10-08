import React from "react";
import ErrorMessage from "../../Error/ErrorMessage";
import "./LoginForm.css";

function LoginForm() {
    return (
        <div className="form-container">
            <div className="form-div">
                <div className="form-h1">
                    <h1>Login</h1>
                </div>

                <form>
                    <div className="form-input-container">
                        <div>
                            <input
                                className="form-input"
                                type="text"
                                placeholder="Username"
                                name="username"
                                // value={username}
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
                                // value={password}
                            />
                        </div>
                        {/* {passwordError && <ErrorMessage errorMessage='Invalid information' />} */}
                    </div>
                    <div className="clear"></div>
                    <div className="button-container">
                        <button>Login</button>
                    </div>
                    <div className="button-container">
                        <button>Login with Facebook</button>
                    </div>
                    <div className="button-container">
                        <button>Login with Github</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
