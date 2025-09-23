import "./User.css";
import SiteIcon from "./Icons/SiteIcon.svg";
import { NavLink, useNavigate } from "react-router";
import { useState } from "react";
import { auth } from "../../FireBase/FireBase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp() {
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
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

       const user = userCredential.user;
       await updateProfile(auth.currentUser, { displayName: username });
       await auth.currentUser.reload();


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
  };

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
                <h4>Username</h4>
                <div className="Username">
                  <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  ></input>
                </div>
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
                  <button
                    className="ShowPassword"
                    onClick={MakePasswordVisible}
                  >
                    <span>👁️</span>
                  </button>
                </div>
              </div>
              <div className="ErrorContainer">
                {error && <p className="error">{error}</p>}
              </div>

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
