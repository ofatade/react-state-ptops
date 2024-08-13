import { useState } from 'react';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    { title: 'The Matrix', description: 'A computer hacker learns about the true nature of reality.', genre: 'Action', showDetails: false },
    { title: 'Inception', description: 'A thief who steals corporate secrets through dream-sharing technology.', genre: 'Sci-Fi', showDetails: false },
    { title: 'Interstellar', description: 'A team of explorers travel through a wormhole in space.', genre: 'Sci-Fi', showDetails: false },
    { title: 'The Dark Knight', description: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into chaos.', genre: 'Action', showDetails: false },
  ]);

  const [genreFilter, setGenreFilter] = useState('All');

  const toggleDetails = (index) => {
    const newMovies = [...movies];
    newMovies[index].showDetails = !newMovies[index].showDetails;
    setMovies(newMovies);
  };

  const removeMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    setMovies(newMovies);
  };

  const toggleGenreView = () => {
    setGenreFilter(genreFilter === 'All' ? 'Action' : 'All');
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <button onClick={toggleGenreView}>
        {genreFilter === 'All' ? 'Show Action Movies' : 'Show All Movies'}
      </button>
      <ul>
        {movies
          .filter(movie => genreFilter === 'All' || movie.genre === genreFilter)
          .map((movie, index) => (
            <li key={index}>
              <span onClick={() => toggleDetails(index)}>{movie.title}</span>
              {movie.showDetails && <p>{movie.description}</p>}
              <button onClick={() => removeMovie(index)}>Remove</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MoviesList;
