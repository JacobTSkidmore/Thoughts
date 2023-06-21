//Expansion of info page
const who = document.querySelector('.who');
const one = document.querySelector('.one');

const what = document.querySelector('.what');
const two = document.querySelector('.two');

const when = document.querySelector('.when');
const three = document.querySelector('.three');

const where = document.querySelector('.where');
const four = document.querySelector('.four');

const how = document.querySelector('.how');
const five = document.querySelector('.five');


one.addEventListener('mouseover', e => {
  who.classList.remove('hidden')
});

one.addEventListener('mouseout', e => {
  who.classList.add('hidden');
});

two.addEventListener('mouseover', e => {
  what.classList.remove('hidden')
});

two.addEventListener('mouseout', e => {
  what.classList.add('hidden');
});

three.addEventListener('mouseover', e => {
  when.classList.remove('hidden')
});

three.addEventListener('mouseout', e => {
  when.classList.add('hidden');
});

four.addEventListener('mouseover', e => {
  where.classList.remove('hidden')
});

four.addEventListener('mouseout', e => {
  where.classList.add('hidden');
});

five.addEventListener('mouseover', e => {
  how.classList.remove('hidden')
});

five.addEventListener('mouseout', e => {
  how.classList.add('hidden');
});
