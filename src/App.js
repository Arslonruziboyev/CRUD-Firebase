import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isSinup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSiginup = () => {
    console.log(email, username, password);
  };

  const handleLogin = () => {
    console.log(email, password);
  };

  return <div className="App"></div>;
}

export default App;
