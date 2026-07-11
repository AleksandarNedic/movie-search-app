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
 <div class="movieDetailsCard">

    <div class="mediaSection">
        <img class="moviePoster"
             src="${movieData.Poster}"
             alt="Movie Poster">

        <iframe
            class="movieTrailer"
            src="https://www.youtube.com/embed/${trailerKey}">
        </iframe>
    </div>

    <div class="movieInfo">

        <h2>${movieData.Title}</h2>

        <div class="movieMeta">
            <p>⭐ IMDb: ${movieData.imdbRating}</p>
            <p>📅 ${movieData.Year}</p>
            <p>🎬 ${movieData.Genre}</p>
            <p>⏱ ${movieData.Runtime}</p>
            <p>🎥 ${movieData.Director}</p>
        </div>

        <div class="plot">
            <h3>Plot</h3>
            <p>${movieData.Plot}</p>
        </div>

    </div>

</div>
   
    `
            })
    })




