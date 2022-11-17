const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;
 const backdrop = document.querySelector('body').firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling ;
const userInputs = addMovieModal.querySelectorAll('input');
//const userInputs = addMovieModal.getElementByTagName('input');

const movies = [] ;
const togglingBackdrop = () => {
    backdrop.classList.toggle('visible');
 };

const togglingTheMovieButton = () => {   //function() {}
    addMovieModal.classList.toggle('visible');
    togglingBackdrop();
};
const clearUserInputs = () => {
    for(const usrInputs of userInputs) {
        usrInputs.value = '' ;
  };
};
const backdropClickHandler = () => {
    togglingTheMovieButton();
};
const cancelButtonClickHandler = () => {
    togglingTheMovieButton();
    clearUserInputs();
};
const addMovieButtonHandler = () => {
 const titleValue = userInputs[0].value ;
 const imageUrlValue = userInputs[1].value ;
 const ratingValue = userInputs[2].value ;

if(titleValue.trim() === '' ||
imageUrlValue.trim() ==='' ||
ratingValue.trim() === '' ||
+ratingValue < 1 ||
+ratingValue > 5) {
    alert('Please enter a valid input i.e rating between (1 to 5)') ;
    return;
}
const newMovies = {
    tile: titleValue,
    imageUrl: imageUrlValue,
    rating:  ratingValue
}
movies.push(newMovies);
console.log(movies);
togglingTheMovieButton();
clearUserInputs();
};
startAddMovieButton.addEventListener('click',togglingTheMovieButton);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelButtonClickHandler);
confirmAddMovieButton.addEventListener('click',addMovieButtonHandler);