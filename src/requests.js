//API from where we get the info about the movies
const API_KEY = "19f7e4c64c2c142350b87f1a3e408a9b";


//Export querys made to de API
const requests = {
    getTrending: `/trending/all/day?api_key=${API_KEY}`,
    getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    getActionM: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
    getComedyM: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    getHorroeM: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
    getRomanceM: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    getDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
}

export default requests;