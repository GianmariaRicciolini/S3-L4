const table = document.getElementById("table");
const drawNumber = document.getElementById("draw");

document.addEventListener("DOMContentLoaded", function () {
  let currentRow;
  for (let i = 1; i <= 76; i++) {
    if ((i - 1) % 10 === 0) {
      currentRow = table.insertRow();
    }

    const cell = currentRow.insertCell();
    cell.innerHTML = i;
  }
});

drawNumber.onclick = function () {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  console.log(randomNumber);

  const cells = document.getElementsByTagName("td");

  for (let i = 0; i < cells.length; i++) {
    if (parseInt(cells[i].innerText) === randomNumber) {
      cells[i].classList.add("chosen");
      break;
    }
  }
};
