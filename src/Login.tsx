import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './Login.scss'; // Import the SCSS file
import { Skeleton } from "./components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [click,setclick]=useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const authUser = async (email, password) => {
    try {
      const response = await axios.post(
        "https://alpha-one-server.vercel.app/api/v1/checkUser",
        { email, password }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      setclick(false);
      console.error("Error during authentication:", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setclick(true); 
    const authResponse = await authUser(email, password);

    if (authResponse && authResponse.success) {
      login(); 
      navigate("/admin/dashboard");
    } else {
      alert("Authentication failed. Please check your email and password.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">GAIL INDIA ADMIN DASHBOARD</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
     {!click? <button type="submit" className="login-button">
         Login
        </button>: <div className="loginLoad">
        <Skeleton/>
          </div>}
      </form>
    </div>
  );
};

export default Login;
