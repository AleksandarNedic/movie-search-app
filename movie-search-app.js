const apiKey = '2c3f792a'
//https://www.omdbapi.com/?apikey=${apiKey}&t=${title}


//======================DOM=======================================
const movieSearchInput = document.querySelector('#movie-search-input');
const movieSearchForm = document.querySelector('#movie-search-form');
const movieDisplayDiv = document.querySelector('#movie-search-results');
const movieYearFilter = document.querySelector('#movie-filter-select');
const movieTypeFilter = document.querySelector('#movie-type-filter');
//================================================================



const currentYear = new Date().getFullYear();

for (let year=  currentYear; year >= 1900;  year--) {
    const option = document.createElement('option');
    option.textContent = year;

    movieYearFilter.appendChild(option);
}



movieSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    moviesSearch(movieSearchInput.value)
    movieSearchInput.value = '';
})


function moviesSearch(title) {
    const releaseYear = movieYearFilter.value;
    const movieType = movieTypeFilter.value;
    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;
    if (releaseYear !== 'Release Year' ) {
        url += `&y=${releaseYear}`;}
         if (movieType !== 'Type' ) {
            url += `&type=${movieType}`;}



        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                movieDisplayDiv.innerHTML = '';
                for (let i = 0; i < json.Search.length; i++) {
                    movieDisplayDiv.innerHTML += `
 <a class="textLink" href="Movie-details-page.html?id=${json.Search[i].imdbID}">
            <div class="movieCard">

    <img class="moviePoster" src="${json.Search[i].Poster}" alt="movie poster">

    <div class="movieInfo">
       
            <h2>${json.Search[i].Title}</h2>
        

        <p>Release date: ${json.Search[i].Year}</p>

      
    </div>

</div> 
                        </a>`
                }
            })}






