import React from 'react';
const LoginAttempt = ({index, name}) => {
    return(
            <React.Fragment key={index}>
                <p>
                    <span>{index + 1}. </span>
                    <span>Logged in as: <strong>{name}</strong> </span>
                </p>
            </React.Fragment>
    )
}

export default LoginAttempt;