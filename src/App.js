import React, { useState } from "react";
import './App.css';
import LoginAttempts from './components/LoginAttempts'
import LoginForm from './components/LoginForm'

const App = () => {

  //Main State
  const [usernames, setUsernames] = useState([]);
  const [filteredUsernames, setFilteredUsernames] = useState([]);

  //Temp State
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  //Add usernames
  const addUsername = () => {
    if(newUsername){
      setUsernames([...usernames, newUsername]);
      setFilteredUsernames([...usernames, newUsername]);
      setNewUsername('');
      setNewPassword('');
    }
  }

  const searchTextHandler = e => {
    const value = e.target.value;
    if(value){
      setFilteredUsernames(
        usernames.filter(name => name.match(new RegExp(value, "i")))
      )
    }else{
      setFilteredUsernames([...usernames]);
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

      <LoginAttempts filteredUsernames={filteredUsernames} searchTextHandler={searchTextHandler}/>
    </div>
  );
};

export default App;
