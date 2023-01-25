const LoginForm = ({newUsername, setNewUsername, addUsername, newPassword, setNewPassword}) => {
    return(
        <div className='row'>
            <div className='form'>
            <form >
                <div className="input-container">
                <label>Username </label>
                <input 
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)} type="text" name="uname" required />
                </div>
                <div className="input-container">
                <label>Password </label>
                <input value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} type="password" name="pass" required />
                </div>
                <div className="button-container">
                <button onClick={addUsername} className='btn btn-success'>Continue</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default LoginForm;