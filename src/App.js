import React, { useState } from "react";
import './App.css';
import LoginAttempts from './components/LoginAttempts'
import LoginForm from './components/LoginForm'

const App = () => {

  //Main State
  const [usernames, setUsernames] = useState([]);

  //Temp State
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  //Add usernames
  const addUsername = () => {
    if(newUsername){
      setUsernames([...usernames, newUsername]);
      setNewUsername('');
      setNewPassword('');
    }
  }

  return (
    <div className="App">
      <LoginForm 
        newUsername={newUsername} 
        setNewUsername={setNewUsername}
        addUsername={addUsername}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
      />

      <LoginAttempts usernames={usernames}/>
    </div>
  );
};

export default App;
