// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movie => movie.director);
  console.log(result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(movie => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const directorMovies = getMoviesFromDirector(array, director);
  let scoreSum = directorMovies.reduce(
    (currentAverage, currentMovie) => currentAverage + currentMovie.score, 0);
  const average = directorMovies.length !== 0 ? scoreSum / directorMovies.length : 0;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let titles = array.map(element => element.title);
  let orderMov = titles.sort();
  return orderMov.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const movieByYear = array.slice();
  return movieByYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  const moviesByGenre = array.filter(movie => movie.genre.includes(category) && movie.score);
  const totalScoreByCategory = moviesByGenre.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
  const average = moviesByGenre.length > 0 ? totalScoreByCategory / moviesByGenre.length : 0;

  return Number(average.toFixed(2));
}

// Exercise 7: Modify the duration of movies function hoursToMinutes() // Exercise 7: Modify the duration of movies function hoursToMinutes() 
function hoursToMinutes(movies) {
  let minutesMovies = movies.map(movie => {
    if (typeof movie.duration === 'string') {
      let parts = movie.duration.split(' ');
      let minutes = 0;

      for (const part of parts) {
        if (part.includes('h')) {
          minutes += parseInt(part) * 60;
        } else if (part.includes('min')) {
          minutes += parseInt(part);
        }
      }

      return {
        ...movie,
        duration: minutes
      }; // Returns the duration in minutes.
    } else {
      return movie; //Returns the duration in minutes of original film if the length is not a string
    }
  });

  return minutesMovies;
}

// Exercise 8: Get the best film of a year 
function bestFilmOfYear(movies, year) {
  const filmYear = movies.filter(movie => movie.year === year);
  if (filmYear.length === 0) {
    return [];
  }
  let bestScore = null;
  let bestFilm = [];
  filmYear.forEach(movie => {
    if (bestScore === null || movie.score > bestScore) {
      bestScore = movie.score;
      bestFilm = [movie];
    } else if (movie.score === bestScore) {
      bestFilm.push(movie);
    }
  });
  console.log(bestFilm);
  return bestFilm;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}