//create a variable using DOM element like document models like
//getElementbyId or queryselector
const draggable = document.querySelector(".first-inner");
const container = document.querySelector(".first-box");
//defining the drag to false why means
//when your mouse moves mean the content also moves
let isDragging = false;
//it default value of x and y axis
let offsetX = 0;
let offsetY = 0;
//this eventListener used to get the mouse events where it is started
draggable.addEventListener("mousedown", (e) => {
  //drag to true
  isDragging = true;
  //get the mouse position for x and y
  offsetX = e.clientX - draggable.offsetLeft;
  offsetY = e.clientY - draggable.offsetTop;
});
//this eventListener used to get the mouse events where it is moved
document.addEventListener("mousemove", (e) => {
  //checking the drag is true or false ,true means it will do remaining process
  if (isDragging) {
    //get the mouse position for x and y
    let x = e.clientX - offsetX;
    let y = e.clientY - offsetY;
    //checking the mouse position is out of the container or not

    const containerRect = container.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();
    //checking the x and y value =0 or not
    if (x < 0) x = 0;
    //it is used to find the correct width and height of the container
    if (x + draggableRect.width > containerRect.width) {
      x = containerRect.width - draggableRect.width;
    }

    if (y < 0) y = 0;
    if (y + draggableRect.height > containerRect.height) {
      y = containerRect.height - draggableRect.height;
    }
    //it helps to change the position of the element change in css using js element
    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

//drag out side the box js
let newX = 0,
  newY = 0,
  startX = 0,
  startY = 0;

const card = document.getElementById("card");

card.addEventListener("mousedown", mouseDown);

function mouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  document.addEventListener("mousemove", mouseMove);
  document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
  newX = startX - e.clientX;
  newY = startY - e.clientY;

  startX = e.clientX;
  startY = e.clientY;

  card.style.top = card.offsetTop - newY + "px";
  card.style.left = card.offsetLeft - newX + "px";
}

function mouseUp(e) {
  document.removeEventListener("mousemove", mouseMove);
}
