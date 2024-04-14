import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <>
      <div className="container">
        <div className="login-container">
          <h3>Admin Login</h3>
          <form onSubmit={handleSubmit}>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
            </div>
            
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit">Login</button>
            <div className="btnSection">
              <p>Sign Up as Admin</p>
              <NavLink to="/signup">SignUp</NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
