let container = document.querySelector("#container");

userPrompt();
function userPrompt() {
  let j = prompt("Input Grid Size:");
  if (j > 100) {
    prompt("Too Big!");
    userPrompt();
  } else {
    return createGrid();
  }
  function createGrid() {
    container.setAttribute(
      "style",
      "grid-template-columns: repeat(" + j + ", auto)"
    );

    for (let i = 0; i < j * j; i++) {
      let boxDiv = document.createElement("div");
      boxDiv.classList.add("boxDiv");
      boxDiv.setAttribute("id", `${i}`);
      boxDiv.addEventListener(
        "mouseover",
        (event) => {
          event.target.style.background = "black";

          setTimeout(() => {
            event.target.style.background = "";
          }, 1300);
        },
        false
      );
      container.appendChild(boxDiv);
    }
  }
}
