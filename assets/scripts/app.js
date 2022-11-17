const addMovieModal = document.getElementById('add-modal');
//const addMovieModal = document.querySelector('#add-modal');
//const addMovieModal = document.body.children[1];

const startAddMovieButton = document.querySelector('header button');
//const startAddMovieButton = document.querySelector('header').lastElementChild;
 const backdrop = document.querySelector('body').firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

 const togglingBackdrop = () => {
    backdrop.classList.toggle('visible');
 };

const togglingTheMovieButton = () => {   //function() {}
    addMovieModal.classList.toggle('visible');
    togglingBackdrop();
};
const backdropClickHandler = () => {
    togglingTheMovieButton();
};
const cancelButtonClickHandler = () => {
    togglingTheMovieButton();
}
startAddMovieButton.addEventListener('click',togglingTheMovieButton);
backdrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click',cancelButtonClickHandler);