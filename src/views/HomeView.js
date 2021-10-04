import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../services/moviesApi";
import MoviesList from "../components/MoviesList/MoviesList";


export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>

      {movies && <MoviesList movies={movies} />}
    </>
  );
}
