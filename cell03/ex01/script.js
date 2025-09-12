const balloon = document.getElementById('balloon');
const colors = ['red', 'green', 'blue'];
let size = 200;
let ci = 0;

function apply() {
  balloon.style.width = size + 'px';
  balloon.style.height = size + 'px';
  balloon.style.background = colors[ci];
}

function nextIndex(step) {
  ci = (ci + step + colors.length) % colors.length;
}

balloon.addEventListener('click', () => {
  size += 10;
  nextIndex(+1);
  if (size > 420) {
    size = 200;
    ci = 0;
  }
  apply();
});

balloon.addEventListener('mouseleave', () => {
  size = Math.max(200, size - 5);
  nextIndex(-1);
  apply();
});

apply();