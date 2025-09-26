import React from "react";
import { useLoginMutation } from "../../redux/slice/login/loginApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout } from "../../redux/slice/login/authSlice";
import "./style.css";

function Login() {
  const [login, { isLoading }] = useLoginMutation();

  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here

    // const formData = new FormData(e.target as HTMLFormElement);
    // const username = formData.get("username") as string;
    // const password = formData.get("password") as string;
    const inputData = {
      username: "emilys",
      password: "emilyspass",
      expiresInMins: 30,
    };
    login(inputData);
    // const inputData = {
    //   [e.target[0].name]: e.target[0].value,
    //   [e.target[1].name]: e.target[1].value,
    // };
    // console.log("Login form submitted", inputData);
  };

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     console.log(e.target.name, e.target.value);
  //   };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="container">
      <h1>Login using Slice data & RTK Query</h1>

      <div className="login-container">
        {auth.isAuthenticated ? (
          <div className="welcome-message">
            <p>Welcome, {auth.user?.username}!</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Please login!</h2>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                //   onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
