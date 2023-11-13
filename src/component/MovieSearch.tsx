
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { fetchMovies } from '../services/movieSlice';


function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.movies.data);
  const isLoading = useSelector((state: RootState) => state.movies.isLoading);
  const error = useSelector((state: RootState) => state.movies.error);

  const handleSearch = () => {
    dispatch(fetchMovies(searchQuery));
  

  };

  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MovieLand</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" 
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="input input-bordered w-24 md:w-auto" />
      <button onClick={handleSearch}>Search</button>
    </div>
    {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

      <div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies?.map((movie) => (
            <li key={movie.id}>
              <img src={movie.i.imageUrl} alt={movie.l} />
              <p className="mt-2 font-bold" >{movie.l}</p>
              <p>{movie.y}</p>
            </li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default MovieSearch;
