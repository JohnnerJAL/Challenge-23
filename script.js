const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
})

function highlightCups(idx) {

  smallCups.forEach((cup, idx2) => {
    if(idx >= idx2) {
      smallCups[idx2].classList.add("full");
    }
  });

  updateBigCup(idx);
}

function updateBigCup(idx) {
  const remainingLiters = 2-0.25*(idx+1);
  liters.innerText = `${remainingLiters}L`;

  const transition = 100-(remainingLiters/2)*100;
  percentage.style.height = `${transition}%`;

  percentage.innerText = `${transition}%`;
}