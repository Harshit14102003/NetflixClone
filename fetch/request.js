const requests={
   fetchTopRated:`/movie/top_rated?api_key=${process.env.MOVIE_API_KEY}&language=en-US`,
   fetchTrending:`/trending/all/week?api_key=${process.env.MOVIE_API_KEY}&language=en-US`,
   fetchActionMovies:`/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${process.env.MOVIE_API_KEY}&with_genres=99`,
   fetchNetflixOriginals:`/discover/tv?api_key=e1a58ff53401a0e085d6819986ea6085&with_networks=213`,
}
export default requests;

