let container = document.querySelector("#container");

for (let i = 0; i < 255; i++) {
  let boxDiv = document.createElement("div");
  boxDiv.classList.add("boxDiv");
  boxDiv.setAttribute("id", `${i}`);
  boxDiv.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.background = "black";

      setTimeout(() => {
        event.target.style.background = "";
      }, 700);
    },
    false
  );
  container.appendChild(boxDiv);
}
