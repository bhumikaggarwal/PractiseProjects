const addMovieModal = document.getElementById("add-modal");
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
//const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.querySelector("body").firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
//const userInputs = addMovieModal.getElementByTagName('input');
const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById('delete-modal');

const cancelMovieDeletion = () => {
  togglingBackdrop();
  deleteMovieModal.classList.remove('visible');
}
const movies = [];
const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};
const togglingBackdrop = () => {
  backdrop.classList.toggle("visible");
};
const cancelMovieModal = () => {
  addMovieModal.classList.remove("visible");
}
const showMovieModal= () => {
  //function() {}
  addMovieModal.classList.add("visible");
  togglingBackdrop();
};
const deleteMovie = (movieId) => {
  let movieIndex;
  for (const movie of movies) {
    if (movie.id === moviesId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
};
const deleteMovieHandler = (movieId) => {
  
  deleteMovieModal.classList.add('visible');
  togglingBackdrop();
   // deleteMovie(movieId);
};
const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class = "movie-element_image">
    <img src ="${imageUrl}" alt ="${title}">
    </div>
    <div class = "movie-element_info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div> `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));

  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};
const clearUserInputs = () => {
  for (const usrInputs of userInputs) {
    usrInputs.value = "";
  }
};
const backdropClickHandler = () => {
 cancelMovieModal();
 cancelMovieDeletion();
};
const cancelButtonClickHandler = () => {
  cancelMovieModal();
  clearUserInputs();
};
const addMovieButtonHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter a valid input i.e rating between (1 to 5)");
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    tile: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  cancelMovieModal();
  togglingBackdrop();
  clearUserInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};
startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelButtonClickHandler);
confirmAddMovieButton.addEventListener("click", addMovieButtonHandler);
