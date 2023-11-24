"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "../login.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
const provider = new GoogleAuthProvider();

function Login() {
  const GoogleSign_in = async (e) => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <main>
      <div className="login" id="login">
        <div className="containerlogin" id="containerlogin">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social">
                  <FontAwesomeIcon className="icon" icon={faFacebookF} />
                </a>
                <a href="#" className="socialgoogle" onClick={GoogleSign_in}>
                  <FontAwesomeIcon
                    className="icon"
                    id="iconGoogle"
                    icon={faGooglePlusG}
                  />
                </a>
                <a href="#" className="social">
                  <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" id="email" placeholder="Email" />
              <input type="password" id="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <img src="logo1.png" alt="Logo" className="logo" />
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <img src="logo1.png" alt="Logo" className="logo" />
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;
