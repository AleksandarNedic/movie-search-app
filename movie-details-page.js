const apiKey = '2c3f792a'
//https://www.omdbapi.com/?apikey=${apiKey}&t=${title}
//const TmdbApiKey = 'Your api key'


const params = new URLSearchParams(window.location.search);
const movieId = params.get('id');
const divElement = document.querySelector('#movie-details');

fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TmdbApiKey}`)
.then(res => res.json())
    .then(data => {

        const trailerKey = data.results[0].key;

        return fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}`)
            .then(response => response.json())
            .then(movieData => {
                divElement.innerHTML = `
    <div class="MovieDetailsCard">
    <div class="card-title">
      <h3 id="movieTitle" >${movieData.Title}</h3>
    </div>
   <div class="card-body">
   <div class="poster-div">
      <img  alt='Movie Poster' id="moviePoster" src="${movieData.Poster}">
       <iframe 
            src="https://www.youtube.com/embed/${trailerKey}">
            </iframe>
      
      <div class="poster-info">
      <div class="ratingAndTitle">
      <h2>${movieData.Title}</h2>
      <p>⭐ IMDb Rating: ${movieData.imdbRating}</p>
      </div>
      
      <p>📅 ${movieData.Year}</p>
      <p>🎬 ${movieData.Genre}</p>
      <p>⏱ ${movieData.Runtime}</p>
      <p>🎥 ${movieData.Director}</p>
      <div class="plot">
    <h2>Plot</h2>
    <p>${movieData.Plot}</p>
</div>
      
      
      
      
</div>
   </div>
    
    
   </div>
   
    
</div>
   
    `
            })
    })




