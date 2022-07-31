import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Button
        type="submit"
        variant="contained"
        // style={textTransform:"none"}
        onClick={toLogin}
        color="primary"
      >
        Get Started
      </Button>
    </div>
  );
}

export default LandingPage;
