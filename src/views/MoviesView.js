import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Searchbar from "../components/SearchBar/SearchBar";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchSearchMovies } from "../services/moviesApi";

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  const searchURL = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    fetchSearchMovies(searchQuery)
      .then((data) => {
        if (!data.results.length) {
          alert("No result :(  try again");
          return;
        }
        setMovies(data.results);
      })
      .catch((error) => alert("Smth went wrong:( please try again"));
  }, [searchQuery]);

  useEffect(() => {
    if (searchURL === "") {
      return;
    }
    setSearchQuery(searchURL);
  }, [searchURL]);

  const setHistory = (searchQuery) => {
    history.push({
      ...location,
      search: `query=${searchQuery}`,
    });
  };

  const onSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setHistory(searchQuery);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
