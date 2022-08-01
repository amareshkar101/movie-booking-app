import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

const Header = () => {
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.clear();
    navigate("/login?referrer=home");
  };

  const loginFn = () => {
    navigate("/login");
  };

  const isUserLoggedIn = localStorage.getItem("accessToken");

  return (
    <div className="nav-header">
      <div>
        <a
          href="#"
          className="link"
          onClick={() => {
            navigate("/");
          }}
        >
          Bookify
        </a>
      </div>

      {isUserLoggedIn ? (
        <Button
          type="submit"
          variant="contained"
          style={{
            textTransform: "none",
            width: "70px",
            height: "40px",
            marginTop: "10px",
            marginRight: "20px",
          }}
          onClick={logoutFn}
          color="primary"
        >
          Logout
        </Button>
      ) : (
        <Button
          type="submit"
          variant="contained"
          style={{
            textTransform: "none",
            width: "70px",
            height: "40px",
            marginTop: "10px",
            marginRight: "20px",
          }}
          onClick={loginFn}
          color="primary"
        >
          Login
        </Button>
      )}
    </div>
  );
};
export default Header;
