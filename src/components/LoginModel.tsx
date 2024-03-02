import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

interface Props {
  login: boolean;
}

const LoginModel = ({ login }: Props) => {
  const navigate = useNavigate();
  const CreateRedirect = () => {
    navigate("/signup");
  };

  const LoginRedirect = () => {
    navigate("/");
  };

  return (
    <div className="card mb-3 login-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="src\assets\loginImage.png"
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            {login ? (
              <div>
                <div className="login-header">
                  <h5 className="card-title">Login</h5>
                  <a href="" onClick={CreateRedirect}>
                    Create Account
                  </a>
                </div>
                <LoginForm></LoginForm>
              </div>
            ) : (
              <div>
                <div className="signup-header">
                  <h5 className="card-title">Sign Up</h5>
                  <a href="" onClick={LoginRedirect}>
                    Login
                  </a>
                </div>
                <SignupForm></SignupForm>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
