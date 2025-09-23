import SiteIcon from "./Icons/SiteIcon.svg";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { auth } from "../../FireBase/FireBase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn() {
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function MakePasswordVisible(e) {
    e.preventDefault();
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }
  
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
  
        navigate("/Gather/Dashboard");
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setError("This email is already registered.");
        } else if (error.code === "auth/weak-password") {
          setError("Password should be at least 6 characters.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      }
    };
    

  return (
    <>
      <div className="Main">
        <div className="SignUpContainer">
          <div className="SignUp">
            <div className="SignUpTitle">
              <img className="SiteIcon" src={SiteIcon}></img>
              <h1>Welcome back</h1>
              <h3>Sign in to your Gather account</h3>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="EmailAndPassword">
              <h4>Email Address</h4>
              <div className="Email">
                <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                required 
                ></input>
                <button>
                  <span>📧</span>
                </button>
              </div>
              <h4>Password</h4>
              <div className="Password">
                <input
                  type="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
                <button onClick={MakePasswordVisible}>
                  <span>👁️</span>
                </button>
              </div>
            </div>
            <div className="MoreOptions">
              <input className="Checkbox" type="checkbox"></input>
              <h4>Remember me</h4>
              <button className="ForgotPassword">Forgot password?</button>
            </div>
            <button type="submit" className="SignUpButton">🔐 Sign In</button>
            </form>

            <div className="SignInOption">
              <h5>Don't have an account?</h5>
              <NavLink to={"/Gather/SignUp"}>
                <button className="SignInText">Sign Up</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
