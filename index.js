const navItem = document.querySelectorAll('.navItem a');
const homeButton = document.querySelector('.logo a');
var focus;

navItem.forEach( elem => elem.addEventListener('mouseover', e => {
  focus = e.fromElement;
  focus.classList.add('dark');
}));

navItem.forEach( elem => elem.addEventListener('mouseout', e => {
  focus.classList.remove('dark');
}));

homeButton.addEventListener('mouseover', e => {
  e.target.parentElement.classList.add('dark');
});

homeButton.addEventListener('mouseout', e => {
  e.target.parentElement.classList.remove('dark');
});