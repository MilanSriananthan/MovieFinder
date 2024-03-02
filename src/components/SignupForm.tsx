import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignUpData {
  email: string;
  username: string;
  password: string;
  hasNetflix: boolean;
  hasPrime: boolean;
  hasDisney: boolean;
}

const SignupForm = () => {
  const [formData, setFormData] = useState<SignUpData>({
    email: "",
    username: "",
    password: "",
    hasNetflix: false,
    hasPrime: false,
    hasDisney: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [validForm, setValidForm] = useState(true);
  const [userExists, setUserExists] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeBox = (e: { target: { name: any; checked: any } }) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const resetForm = () => {
    setFormData({
      email: "",
      username: "",
      password: "",
      hasNetflix: false,
      hasPrime: false,
      hasDisney: false,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validSignUp(formData)) {
      setValidForm(false);
    } else {
      setValidForm(true);
      setFormSubmitted(true);
    } // Access form data here
  };

  useEffect(() => {
    setFormSubmitted(false);
    if (formSubmitted) {
      const params = new URLSearchParams({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        Netflix: formData.hasNetflix.toString(),
        Prime: formData.hasPrime.toString(),
        Disney: formData.hasDisney.toString(),
      });

      fetch(`http://localhost:5000/signup?${params}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.Signup);
          if (data.Signup == "Exists") setUserExists(true);
          else if (data.Signup == true) {
            setAccountCreated(true);
            resetForm();
          }
        });
    }
  }, [formSubmitted]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword4"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            name="hasNetflix"
            type="checkbox"
            id="gridCheck"
            checked={formData.hasNetflix}
            onChange={handleChangeBox}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Netflix
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="hasPrime"
            type="checkbox"
            id="gridCheck"
            checked={formData.hasPrime}
            onChange={handleChangeBox}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Prime Video
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="hasDisney"
            id="gridCheck"
            checked={formData.hasDisney}
            onChange={handleChangeBox}
          />
          <label className="form-check-label" htmlFor="gridCheck">
            Disney+
          </label>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
      {!validForm ? (
        <div className="alert alert-danger" role="alert">
          Information is not Valid
        </div>
      ) : null}
      {userExists ? (
        <div className="alert alert-danger" role="alert">
          Email or Username Already Exists
        </div>
      ) : null}
      {accountCreated ? (
        <div className="alert alert-success" role="alert">
          Account Created, Please Sign-in
        </div>
      ) : null}
    </form>
  );
};

export default SignupForm;

function validSignUp(data: SignUpData): boolean {
  if (data.email.length < 2) return false;
  if (data.username.length < 6) return false;
  if (data.password.length < 6) return false;
  return true;
}
