import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [incorrectLogin, setIncorrectLogin] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setFormSubmitted(true); // Access form data here
  };

  useEffect(() => {
    setFormSubmitted(false);
    if (formSubmitted) {
      const params = new URLSearchParams({
        username: formData.username,
        password: formData.password,
      });

      fetch(`http://localhost:5000/login?${params}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.login) {
            navigate("/home");
          } else {
            setIncorrectLogin(true);
          }
          console.log(data.login);
        });
    }
  }, [formSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={formData.username}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text"></div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      {incorrectLogin ? (
        <div className="alert alert-danger" role="alert">
          Incorrect Credentials
        </div>
      ) : null}
    </form>
  );
};

export default LoginForm;
