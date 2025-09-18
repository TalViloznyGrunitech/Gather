import SiteIcon from "./Icons/SiteIcon.svg";
import { NavLink } from "react-router";

export default function LogIn() {
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
            <div className="MoreOptions">
              <input className="Checkbox" type="checkbox"></input>
              <h4>Remember me</h4>
              <button className="ForgotPassword">Forgot password?</button>
            </div>
            <button className="SignUpButton">🔐 Sign In</button>
            <div className="SignInOption">
              <h5>Already have an account?</h5>
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
