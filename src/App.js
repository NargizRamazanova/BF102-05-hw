import './App.css';
import React, {useState} from 'react';
import SignIn from './Pages/SignIn';
import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp' 

function App() {
  const [currentUser, setCurrentUser] = useState()
  const [signIn, setSignIn] = useState(true)
  return (
    <div>
      {
        currentUser ? (
          <Welcome/>
        ) : (
          signIn ? (
            <SignIn setCurrentUser= {setCurrentUser} setSignIn={setSignIn}/>
          ) : (
            <SignUp setCurrentUser= {setCurrentUser} setSignIn={setSignIn}/>
          )
        )
      } 
    </div>
  );
}

export default App;
