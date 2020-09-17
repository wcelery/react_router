import React from 'react';
import './App.css';

function MovieDetail({match}) {

    const [details, setDetails] = React.useState({});

    /* const [details, setDetails] = React.useState({                          <===========    if array have images inside
        images:{}
    }); */

    const API_KEY = '3898867ebc97917c67c0d9841df34dce';

    const fetchMovieDetail = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${API_KEY}`);      /* match.params.whatever is access to props from previous state */
        const details = await data.json();
        setDetails(details);
    }
    
    const IMG = `https://image.tmdb.org/t/p/w300${details.poster_path}`;

    React.useEffect(() => {
        fetchMovieDetail();
    },[])

    return (
        <div>
            <h3>Main content</h3>
            <div className='movie'>
                <img src={IMG} alt=""/>
                <h2>
                    {details.title}
                </h2>
            </div>
            
        </div>
    );
}

export default MovieDetail;