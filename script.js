let s = document.querySelector("section");
s.onmousemove = function(e) {
  var rect = e.currentTarget.getBoundingClientRect();
  s.style.setProperty('--x',(e.clientX - rect.left)+'px');
  s.style.setProperty('--y',(e.clientY - rect.top)+'px');
}