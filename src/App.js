import React from "react";
import OneId from 'oneid-sdk'

function App() {
  const {start, handleAuth, currentUser, isAuthenticated} = OneId
  start({apiKey: "vxCgAQ==.fUF/4jTXK8FTGqqt31iDUIpMkYXr3y+Lwxy9pMtVW2Y=",siteDomain: "http://localhost:3000"})


  if (!isAuthenticated()) {
    return (
      <div>
        <button onClick={() => handleAuth({type: "login", scope: "profile"})}>Authenticate</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome {currentUser().user.email}</h1>
    </div>
  );
}

export default App