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
import "./LandingPage.css";

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllMovies()
      .then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setMovies(data);
          setIsLoading(false);
          console.log(data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header />
      <ImageCarousel
        images={[Movie1, Movie2, Movie3, Movie4, Movie5, Movie6, Movie7]}
      />
      <div className="movie-main">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="row">
            {movies.map((movie) => {
              return (
                <div>
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
