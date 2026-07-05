const apiKey = '2c3f792a'
//https://www.omdbapi.com/?apikey=${apiKey}&t=${title}
const movieSearchInput = document.querySelector('#movie-search-input');
const movieSearchForm = document.querySelector('#movie-search-form');
const movieDisplayDiv = document.querySelector('#movie-search-results');

movieSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    moviesSearch(movieSearchInput.value)
    movieSearchInput.value = '';
})


function moviesSearch(title) {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`)
    .then(res => res.json())
    .then(json => {
        movieDisplayDiv.innerHTML = '';
        for (let i = 0; i < json.Search.length; i++) {
            movieDisplayDiv.innerHTML += `
             <div class="movieCard">
                   <img class="moviePoster" src="${json.Search[i].Poster}" alt="movie poster"/><br>
                   <h2>Title: ${json.Search[i].Title}<br></h2>
                    <p>Year: ${json.Search[i].Year}<br></p>
              </div>
              
               `

        }
    })}

