import React, { useState } from "react";
import img from "../../assets/signup.svg";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  MenuItem,
} from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ROLES } from "../../constants/userRoles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Signup.css";

function Signup(props) {
  const { onSignupSubmit, goToLogin, errorMessageSignup } = props;

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState(ROLES.CUSTOMER);

  const handleSubmit = (e) => {
    // 1. create the data  object
    // 2. call the onSignupSubmit with data
    // 3. e. prevent default to prevent submit

    const data = { userId, password, name: userName, email, userType };
    onSignupSubmit(data);
    e.preventDefault();
    if (errorMessageSignup) {
      toast.error(errorMessageSignup);
    }
  };

  const paperStyle = {
    padding: "0px 30px",
    width: "300px",
    height: "87vh",
    margin: " auto",
  };

  const marginBtw = {
    margin: "7px auto",
    textTransform: "none",
    borderColor: "#f80040",
  };

  const selectStyle = { marginTop: "10px" };

  return (
    <div className="i-s">
      <div className="i-left-s">
        <img className="i-img-s" src={img} alt="Signing up" />
      </div>
      <div className="i-right-s">
        <Grid>
          <Paper style={paperStyle}>
            <form onSubmit={handleSubmit}>
              <Typography style={marginBtw}>
                <h1 className="headed-s">Sign Up</h1>
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
                style={marginBtw}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                color="primary"
                fullWidth
                required
              />

              <TextField
                id="userName"
                variant="outlined"
                label="Username"
                placeholder="Enter user name"
                style={marginBtw}
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                fullWidth
                required
              />

              <TextField
                id="email"
                variant="outlined"
                label="Email"
                placeholder="Enter Email"
                style={marginBtw}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                fullWidth
                required
              />

              <FormControl fullWidth>
                <InputLabel style={selectStyle} id="demo-simple-select-label">
                  User Type
                </InputLabel>
                <Select
                  // labelId="demo-simple-select-label"
                  id="userType"
                  value={userType}
                  variant="outlined"
                  label="User Type"
                  onChange={(e) => {
                    setUserType(e.target.value);
                  }}
                  style={selectStyle}
                >
                  <MenuItem key={userType} value={"CUSTOMER"}>
                    CUSTOMER
                  </MenuItem>

                  <MenuItem key={userType} value={"CLIENT"}>
                    CLIENT
                  </MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                variant="contained"
                style={marginBtw}
                fullWidth
                color="secondary"
              >
                Sign Up
              </Button>

              {/* toggle to sing-up */}
              <Typography style={marginBtw}>
                Already a member?
                <Link to="#" className="signin-style" onClick={goToLogin}>
                  Sign In
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

export default Signup;
