import React from 'react';
import LoginAttempt from './LoginAttempt';
const LoginAttempts = ({filteredUsernames, searchTextHandler}) => {
    return(
        <div>
			<div className="Attempt-List-Main">
	 			<p>Recent activity</p>
	  			<input onChange={searchTextHandler} type="input" placeholder="Filter..." />
				<ul className="Attempt-List">
                    {filteredUsernames && filteredUsernames
                    .map((name, index) => {
                    return(
                        <LoginAttempt key={index} index={index} name={name} />
                        )
                    })}
		        </ul>
	        </div>
	    </div>
    )
}

export default LoginAttempts;