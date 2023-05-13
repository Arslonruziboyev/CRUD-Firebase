import { useState } from "react";
import "./App.css";

function App() {
  const [isSinup, setIsSignup] = useState(true);
  return (
    <div className="App">
      <div className="text-center">
        <h1>{isSinup ? "Siginup" : "Login"}</h1>
        <br />
        <form>
          {isSinup && (
            <div>
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" id="username" />
            </div>
          )}
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="" id="password" />
          </div>
          {isSinup ? <button>Siginup</button> : <button>Login</button>}
        </form>
        <button type="button">
          {isSinup ? "Alredy have an account?Login" : "Dont Have An Account"}
        </button>
      </div>
    </div>
  );
}

export default App;
