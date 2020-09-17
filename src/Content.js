import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Content() {

    const [movies, setMovies] = React.useState([]);

    const API_KEY = '3898867ebc97917c67c0d9841df34dce';

    const fetchMovies = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1
`);
        const movies = await data.json();
        setMovies(movies.results);
    }

    React.useEffect(() => {
        fetchMovies();
    },[])

    const linkStyle = {
        color:  'black',
        'textDecoration': 'none'
    }

    return (
        <div>
            <h3>Main content</h3>
            <div className='movie'>
                { movies.map(movie =>
                <h2 key={movie.id}>
                    <Link style={linkStyle} to={`content/${movie.id}`}>{movie.title}</Link>
                </h2>
                )}
            </div> 
        </div>
    );
}

export default Content;