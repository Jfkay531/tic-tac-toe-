

var bButton= document.querySelector("#b");
var squares= document.querySelectorAll("td");

function clearBoard() {
  for (var i=0; i<squares.length; i++){
    squares[i].textContent=" "}
}
bButton.addEventListener("click", clearBoard)


//function for marker // X
function marker() {
    if (this.textContent===" "){
      this.textContent='X'
    } else if (this.textContent==="X") {
      this.textContent="O"
    } else {
      this.textContent=" "
    }
  }

//apply the marker function to the cells squares

for (var i=0; i<squares.length; i++){
  squares[i].addEventListener("click", marker)
}
