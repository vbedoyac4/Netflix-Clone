//rfce to create the basics 
import React, {useState, useEffect} from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, getUrl}) {
    const [movies, setMovies] = useState([]);

    //A part of the code that runs on specific conditions
    useEffect(() => {
        //If [], runs only once when the row loads
        async function getData(){
            const request = await axios.get(getUrl);
            //console.log(request.data.results);
            setMovies(request.data.results)
            return request;
        }
        //Consult the API to get the movies info
        getData();
        //[ moust contain any external var outside the useEffect]
    }, [getUrl]);

    console.log(movies)

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row__posters">
             {movies.map(movie => (
                 <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
             ))}
            </div>
           
        </div>
    )
}

export default Row;
