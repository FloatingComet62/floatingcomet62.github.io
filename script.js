let current = -1;
const elements = [];
function spawn() {
  if (current == -1) {
    elements.push({ x: 0, y: 0, width: 1, height: 1 })
    current = 0;
    return;
  }
  const horizontalSplit = elements[current].width * window.innerWidth > elements[current].height * window.innerHeight;
  if (horizontalSplit) {
    elements[current].width /= 2;
    const curr = elements[current];
    elements.push({ x: curr.x + curr.width, y: curr.y, width: curr.width, height: curr.height });
  } else {
    elements[current].height /= 2;
    const curr = elements[current];
    elements.push({ x: curr.x, y: curr.y + curr.height, width: curr.width, height: curr.height });
  }
}

const padding = 10;
function updateElements() {
  document.body.innerHTML = "";
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = element.width * window.innerWidth + "px";
    div.style.height = element.height * window.innerHeight + "px";
    div.style.translate = element.x * window.innerWidth + "px " + element.y * window.innerHeight + "px";
    div.onclick = () => {
      current = i;
      updateElements();
    }

    const filling = document.createElement("div");
    filling.style.backgroundColor = i == current ? "red" : "blue";
    filling.style.translate = `${padding}px ${padding}px`;
    filling.style.width = `calc(100% - ${2 * padding}px)`;
    filling.style.height = `calc(100% - ${2 * padding}px)`;
    div.appendChild(filling);

    document.body.appendChild(div);
  }
}

window.onresize = updateElements;
window.onkeydown = (e) => {
  if (e.key == "t") {
    spawn();
    updateElements();
  }
}
