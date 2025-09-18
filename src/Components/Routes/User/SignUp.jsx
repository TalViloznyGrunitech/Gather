import "./User.css";
import SiteIcon from "./Icons/SiteIcon.svg";
import { NavLink } from "react-router";

export default function SignUp() {
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
            <div className="EmailAndPassword">
              <h4>Email Address</h4>
              <div className="Email">
                <input placeholder="Enter your email"></input>
                <button>
                  <span>📧</span>
                </button>
              </div>
              <h4>Password</h4>
              <div className="Password">
                <input placeholder="Enter your password"></input>
                <button>
                  <span>👁️</span>
                </button>
              </div>
            </div>

            <button className="SignUpButton">🔐 Sign Up</button>
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
