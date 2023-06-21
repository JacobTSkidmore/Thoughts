const navItem = document.querySelectorAll('.navItem a');

navItem.forEach( elem => elem.addEventListener('mouseover', e => {
  var focus = e.relatedTarget;
  focus.classList.add('dark');
}));

navItem.forEach( elem => elem.addEventListener('mouseout', e => {
  var focus = e.relatedTarget;
  focus.classList.remove('dark');
}));