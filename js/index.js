function imgsPrevent() {
  imgs = document.querySelectorAll("img");
  imgs.forEach(img => {
    img.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    })
  });
}
imgsPrevent();

var ready1 = document.getElementById("preloader");
var loading = document.querySelector(".loader");
window.addEventListener('DOMContentLoaded', ready);
function ready() {
  var percent = document.querySelector('.percent');
  var progress = document.querySelector('.progress');
  var count = 4;
  var per = 16;
  var loading = setInterval(animate, 50);
  function animate() {
    if (count == 100 && per == 400) {
      ready1.classList.add("complete");
      clearInterval(loading);
    } else {
      per = per + 4;
      count = count + 1;
      progress.style.width = per + 'px';
      percent.textContent = count + '%';
    }
  }
}

const countEl = document.getElementById("count");
// countvisits();

// function countvisits() {
//   fetch('https://api.countapi.xyz/update/spacestudio/studio/?amount=1')
//     .then((res) => res.json())
//     .then((res) => {
//       countEl.innerHTML = res.value;
//     });
// }
