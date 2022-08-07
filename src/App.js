import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Admin from "./pages/admin/Admin";
import Authentication from "./pages/authentication/Authentication";
import Client from "./pages/client/Client";
import SelectTheatre from "././pages/select-theatre/SelectTheatre";
import SelectSeats from "././pages/select-seats/SelectSeats";
import MovieDetail from "././pages/movie-detail/MovieDetail";
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
            <Route path="/client" element={<Client />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
            <Route
              path="/buy-tickets/:movieName/:movieId"
              element={<SelectTheatre />}
            />

            <Route
              path="/select-seats/:movieId/:theatreId"
              element={<SelectSeats />}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
