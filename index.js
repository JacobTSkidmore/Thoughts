const navItem = document.querySelectorAll('.navItem a');
var focus;

navItem.forEach( elem => elem.addEventListener('mouseover', e => {
  focus = e.fromElement;
  focus.classList.add('dark');
}));

navItem.forEach( elem => elem.addEventListener('mouseout', e => {
  focus.classList.remove('dark');
}));

