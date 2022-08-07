import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../../styles/Header.css";

const Header = (props) => {
  const {
    filterMoviesBySearch,
    //  showSearch,
    hideSearch,
  } = props;
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  const logoutFn = () => {
    localStorage.clear();
    navigate("/login?referrer=home");
  };

  const loginFn = () => {
    navigate("/login");
  };

  const searchFn = (e) => {
    console.log(searchText);
    e.preventDefault();
    filterMoviesBySearch(searchText);
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

      {!hideSearch && (
        <form onSubmit={searchFn}>
          <input
            type="text"
            className="custom-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Enter movie name"
          />
        </form>
      )}

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
