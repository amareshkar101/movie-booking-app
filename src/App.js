import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import Admin from "./pages/admin/Admin";
import Authentication from "./pages/authentication/Authentication";
import Client from "./pages/client/Client";
import SelectTheatre from "././pages/select-theatre/SelectTheatre";
import SelectSeats from "././pages/select-seats/SelectSeats";
import MovieDetail from "././pages/movie-detail/MovieDetail";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Unauthorised403 from "./components/unauthorised/Unauthorised403";
import RequireAuth from "./components/require-auth/RequireAuth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f80040",
      // main: "#2b84ea",
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
            <Route path="/unauthorised" element={<Unauthorised403 />} />
            <Route path="/movie-detail/:movieId" element={<MovieDetail />} />
            <Route
              path="/buy-tickets/:movieName/:movieId"
              element={<SelectTheatre />}
            />

            <Route element={<RequireAuth allowedRoles={["CUSTOMER"]} />}>
              <Route
                path="/select-seats/:movieId/:theatreId"
                element={<SelectSeats />}
              />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;

//customer login--2516(2516)
