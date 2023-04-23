import './login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields here.
    if (!username || !password) {
      const err = setErrorMessage("Both username and password are required.");
      return(err);
    }

    // Submit data to backend.
    console.log("Submitting login data...");
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <div className="error">{errorMessage}</div>}
        <label htmlFor="username">Username</label>
        <input type="text" onChange={handleUsernameChange} value={username} />
        <label htmlFor="password">Password</label>
        <input type="password" onChange={handlePasswordChange} value={password} />
      <button type="submit">Login</button>
      Not registered<Link to= "/signup">Register Now! </Link>
      
    </form>
  )
} 

export default Login;
