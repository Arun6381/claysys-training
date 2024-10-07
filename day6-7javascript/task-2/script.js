document.getElementById("add-tasks").addEventListener("click", function() {
  var task = document.getElementById("task").value;

  if (task === "") {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").textContent = "Please enter a task!";
    return;
  }

  var li = document.createElement("li");
  li.style.listStyleType = "none";
  li.innerHTML = `
    <input type="checkbox" id="complete"/> <span>${task}</span>
    <button class="delete-btn">Delete</button>
    <hr>`;

  document.getElementById("taskList").appendChild(li);

  document.getElementById("task").value = "";
  li.querySelector("span").style.margin = "0 60px ";
  li.querySelector(".delete-btn").addEventListener("click", function() {
    li.remove();
  });

  li.querySelector("#complete").addEventListener("change", function() {
    if (this.checked) {
      li.querySelector("span").style.textDecoration = "line-through";
    } else {
      li.querySelector("span").style.textDecoration = "none";
    }
  });
});
