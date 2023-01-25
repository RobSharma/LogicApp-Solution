import React from 'react';
import LoginAttempt from './LoginAttempt';
const LoginAttempts = ({usernames}) => {
    return(
        <div>
			<div className="Attempt-List-Main">
	 			<p>Recent activity</p>
	  			<input type="input" placeholder="Filter..." />
				<ul className="Attempt-List">
                    {usernames && usernames
                    .map((name, index) => {
                    return(
                        <LoginAttempt index={index} name={name} />
                    )
                    })}
		        </ul>
	        </div>
	    </div>
    )
}

export default LoginAttempts;