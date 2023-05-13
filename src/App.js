import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isSinup, setIsSignup] = useState(true);
  return (
    <div className="App">
      <div className="text-center shadow-lg p-3 mb-5 bg-body rounded">
        <h1>{isSinup ? "Siginup" : "Login"}</h1>
        <br />
        <form>
          {isSinup && (
            <div>
              <label htmlFor="username" className="fs-5">
                Username
              </label>
              <br />
              <input type="text" id="username" className="w-25 rounded-pill" />
            </div>
          )}
          <div>
            <label className="fs-5" htmlFor="email">
              Email
            </label>
            <br />
            <input
              className="w-25 rounded-pill"
              type="text"
              name=""
              id="email"
            />
          </div>
          <div>
            <label className="fs-5" htmlFor="password">
              Password
            </label>
            <br />
            <input
              className="w-25 rounded-pill"
              type="password"
              name=""
              id="password"
            />
          </div>
          {isSinup ? (
            <button
              className="btn btn-primary mt-2"
              onClick={() => setIsSignup(!isSinup)}
            >
              Siginup
            </button>
          ) : (
            <button className="btn btn-primary mt-2">Login</button>
          )}
        </form>
        <button
          onClick={() => setIsSignup(!isSinup)}
          className="btn btn-info rounded-fill mt-2"
          type="button"
        >
          {isSinup
            ? "Alredy have an account ? Login"
            : "Dont Have An Account ? SiginUp"}
        </button>
      </div>
    </div>
  );
}

export default App;
