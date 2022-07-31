import React, { useState } from "react";
import img from "../../assets/login.svg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Grid, Paper, TextField, Typography } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Login.css";

function Login(props) {
  const { onLoginSubmit, goToSignup, loginMessage, errorMessageLogin } = props;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    // 1. create the data  object
    // 2. call the onLoginSubmit with data
    // 3. e. prevent default to prevent submit

    const data = { userId, password };
    onLoginSubmit(data);
    e.preventDefault();
    if (errorMessageLogin) {
      toast.error(errorMessageLogin);
    } else if (loginMessage) {
      toast.success(loginMessage);
    }
  };

  const paperStyle = {
    padding: "0px 30px",
    width: "300px",
    height: "60vh",
    margin: " auto",
  };

  const marginBtw = {
    margin: "10px auto",
    textTransform: "none",
  };

  return (
    <div className="i-l">
      <div className="i-left-l">
        <img className="i-img-l" src={img} alt="Logging in" />
      </div>
      <div className="i-right-l">
        <Grid>
          <Paper style={paperStyle}>
            <form onSubmit={handleSubmit}>
              <Typography style={marginBtw}>
                <h1 className="header">Sign In</h1>
              </Typography>

              <TextField
                id="userId"
                variant="outlined"
                label="User Id"
                placeholder="Enter User Id"
                style={marginBtw}
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                fullWidth
                required
              />

              <TextField
                id="password"
                variant="outlined"
                label="Password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={marginBtw}
                type="password"
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                style={marginBtw}
                fullWidth
                color="primary"
              >
                Sign In
              </Button>

              {/* toggle to sing-up */}
              <Typography style={marginBtw}>
                Not a member?
                <Link to="#" className="signup-style" onClick={goToSignup}>
                  Sign Up
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;
