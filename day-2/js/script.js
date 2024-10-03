$(document).ready(function() {
  $("#addtask").click(function() {
    var task = $("#taskInput").val();
    if (task) {
      $("#taskList").append(
        "<li><span class='taskItem'>" +
          task +
          "</span> <button class='taskText'>not completed</button> <button class='removebtn'>Delete Task</button></li>"
      );
      $("#taskInput").val("");
    }
  });

  $("#taskInput").focus(function() {
    $(this).addClass("highlight");
  });

  $("#taskInput").blur(function() {
    $(this).removeClass("highlight");
  });

  $("#taskList").on("click", ".taskText", function() {
    $(this)
      .siblings(".taskItem")
      .toggleClass("complete"); // Toggle complete class on taskItem
    if ($(this).text() === "completed") {
      $(this).text("not completed");
    } else {
      $(this).text("completed");
    }
  });

  $("#taskList").on("click", ".removebtn", function() {
    $(this)
      .parent()
      .remove();
  });
});
