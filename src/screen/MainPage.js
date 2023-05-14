import React from "react";
import { useState } from "react";
import { auth } from "../config/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const MainPage = () => {
  const [isSinup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSiginup = () => {
    console.log(email, username, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user creted");
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const handleLogin = () => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("success");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
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
            <input
              type="text"
              id="username"
              className="w-25 rounded-pill"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSinup ? (
          <button className="btn btn-primary mt-2" onClick={handleSiginup}>
            Siginup
          </button>
        ) : (
          <button className="btn btn-primary mt-2" onClick={handleLogin}>
            Login
          </button>
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
  );
};

export default MainPage;
