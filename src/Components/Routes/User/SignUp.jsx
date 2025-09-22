import "./User.css";
import SiteIcon from "./Icons/SiteIcon.svg";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { auth } from "../../FireBase/FireBase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      navigate("/Gather/Discover");


    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      
    }

  }








  return (
    <>
      <div className="Main">
        <div className="SignUpContainer">
          <div className="SignUp">
            <div className="SignUpTitle">
              <img className="SiteIcon" src={SiteIcon}></img>
              <h1>Sign Up</h1>
              <h3>Sign up to your Gather account</h3>
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
                <button>
                  <span>👁️</span>
                </button>
              </div>
            </div>
            {error && <p className="error">{error}</p>}


            <button className="SignUpButton">🔐 Sign Up</button>
            </form>
            <div className="SignInOption">
              <h5>Already have an account?</h5>
              <NavLink to={"/Gather/LogIn"}>
                <button className="SignInText">Sign In</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
