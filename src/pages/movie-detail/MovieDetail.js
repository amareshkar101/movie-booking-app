import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieDetails } from "../../api/movies";
import ReactPlayer from "react-player";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "@mui/material/Button";
import "./MovieDetail.css";

const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const { movieId } = params;

  useEffect(() => {
    //componentDidMount
    fetchMovieDetail(movieId);
  }, []);

  const fetchMovieDetail = (movieId) => {
    getMovieDetails(movieId)
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          console.log(data);
          setMovieDetail(data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // give default empty string values to variables if they are undefined
  const {
    trailerUrl = "",
    posterUrl = "",
    name = "",
    description = "",
    director = "",
    releaseDate = "",
    casts = [],
    _id = "",
    releaseStatus,
  } = movieDetail;

  const buttonText =
    releaseStatus === "RELEASED" ? "BOOK TICKETS" : "COMING SOON";

  const buttonUrl =
    releaseStatus === "RELEASED" ? `/buy-tickets/${name}/${_id}` : "#";

  const navigate = useNavigate();

  return (
    <div className="movie-detail">
      <Header hideSearch={true} />

      <div className="video-player">
        <ReactPlayer
          url={trailerUrl}
          controls
          // className="videop"
          width="100%"
          height="440px"
        />
      </div>

      <div className="movie-data">
        <div className="left">
          <img
            src={posterUrl}
            className="movie-poster"
            alt="movie poster"
            width="50%"
          />
        </div>

        <div className="right">
          <h2>{name}</h2>
          <h4>{description}</h4>

          <hr />

          <h5>Directed by: {director}</h5>
          <h5>Release Date: {releaseDate}</h5>

          <hr />

          <h4>Casts</h4>
          {casts.map((cast) => {
            return <h5 key={cast}>{cast}</h5>;
          })}

          <hr />

          <Button
            type="submit"
            variant="contained"
            style={{
              textTransform: "none",
              marginTop: "10px",
            }}
            onClick={() => navigate(buttonUrl)}
            color="primary"
          >
            {buttonText}
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MovieDetail;
