import React from "react";
import { useOneid } from "react-oneid";

function App() {
  const { handleAuth, isAuthenticated, currentUser } = useOneid();

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