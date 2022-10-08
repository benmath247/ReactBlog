import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import LoginForm from '../LoginForm/LoginForm';

import NewUserForm from '../NewUserForm/NewUserForm';

function AuthFormContainer() {
    const [key, setKey] = useState('Register');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
        >
            <Tab eventKey="Register" title="Register">
                <NewUserForm />
            </Tab>
            <Tab eventKey="Login" title="Login">
                <LoginForm />
            </Tab>
        </Tabs>
    );
}


export default AuthFormContainer