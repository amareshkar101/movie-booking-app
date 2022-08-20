import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MoviesList from "../../components/movies-list/Movieslist";
import TheatresList from "../../components/theatres-list/TheatresList";
import "./Client.css";

function Client() {
  const name = localStorage.getItem("name");
  return (
    <div>
      <Header hideSearch={true} />
      <div className="client-main container bg-light text-dark p-3">
        <h2>Welcome, {name}</h2>
        <h4>Please check these movies below</h4>
        <TheatresList />
        <MoviesList />
      </div>

      <Footer />
    </div>
  );
}

export default Client;

// client01/ //Welcome1
// admin///Welcome1
