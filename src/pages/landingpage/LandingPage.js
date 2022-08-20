import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import ImageCarousel from "../../components/image-carousel/ImageCarousel";
import Footer from "../../components/footer/Footer";
import Movie1 from "../../assets/movie.avif";
import Movie2 from "../../assets/movie1.avif";
import Movie3 from "../../assets/movie2.avif";
import Movie4 from "../../assets/movie3.avif";
import Movie5 from "../../assets/movie4.avif";
import Movie6 from "../../assets/movie5.avif";
import Movie7 from "../../assets/movie6.avif";
import { getAllMovies } from "../../api/movies";
import Spinner from "../../components/spinner/Spinner";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const [allmovies, setAllMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllMovies()
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setMovies(data);
          setAllMovies(data);
          setIsLoading(false);
          console.log(data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const filterMoviesBySearch = (searchText) => {
    const filteredMovies = allmovies.filter((movie) => {
      return movie.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setMovies(filteredMovies);
  };

  const handleGotoDetailPage = (movieId) => {
    navigate(`/movie-detail/${movieId}`);
  };

  return (
    <div className="landing-body">
      <Header
        filterMoviesBySearch={filterMoviesBySearch}
        //  showSearch={true}
      />
      <ImageCarousel
        images={[Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7]}
      />
      <div className="movie-main">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="movie-row">
            {movies.map((movie) => {
              return (
                <div
                  onClick={() => {
                    handleGotoDetailPage(movie._id);
                  }}
                >
                  <img
                    src={movie.posterUrl}
                    alt="poster"
                    className="movie-poster"
                  />
                  <h2>{movie.name}</h2>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
