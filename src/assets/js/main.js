"use strict"

const bar = document.querySelector('.bar');
const visible = document.querySelector('.visible');
var prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    bar.classList.add('visible');
  } else {
    bar.classList.remove('visible');
  }
  prevScrollpos = currentScrollPos;
});
