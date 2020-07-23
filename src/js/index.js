var battlefield = document.querySelector(".container");
const fire = () => {
  battlefield.childNodes[Math.floor(Math.random() * 10)].childNodes[
    Math.floor(Math.random() * 10)
  ].style.background = "red";
};

window.onload = () => {
  for (var i = 0; i < 10; i++) {
    var row = document.createElement("div");
    battlefield.appendChild(row);
    row.style.display = "flex";
    for (var k = 0; k < 10; k++) {
      var col = document.createElement("div");
      row.appendChild(col);
      col.innerHTML = Math.floor(Math.random() * 2);
      col.style.border = "2px solid gray";
      col.style.padding = "15px";
      if (col.innerHTML == 1) col.style.background = "gray";
    }
  }
  var button = document.createElement("button");
  button.innerHTML = "!FIRE!";
  button.style.padding = "10px 30px";
  button.style.background = "red";
  battlefield.appendChild(button);

  button.addEventListener("click", fire);
};
