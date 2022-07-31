import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Admin from "./pages/admin/Admin";
import Authentication from "./pages/authentication/Authentication";
import Customer from "./pages/customer/Customer";
import Client from "./pages/client/Client";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f80040",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Authentication />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/client" element={<Client />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
