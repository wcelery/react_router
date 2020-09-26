import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { GlobalContext } from "../context/GlobalState";

function Content() {
  const [movies, setMovies] = React.useState([]);

  const API_KEY = "3898867ebc97917c67c0d9841df34dce";

  const fetchMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`);
    const movies = await data.json();
    setMovies(movies.results);
  };

  //pull variables from context by destructuring
  const { addToFavorites, favorites } = React.useContext(GlobalContext);

  React.useEffect(() => {
    fetchMovies();
  }, []);

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  };

  let storedFavorite = favorites.find((o) => o.id === movies.id);

  const favoritesDisabled = storedFavorite ? true : false;

  return (
    <div>
      <h3>Main content</h3>
      <div className="movie">
        {movies.map((movie) => (
          <div key={movie.id}>
            <h2>
              <Link style={linkStyle} to={`content/${movie.id}`}>
                {movie.title}
              </Link>
            </h2>
            <button
              disabled={favoritesDisabled}
              onClick={() => addToFavorites(movie)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
