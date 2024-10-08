let students = [];
document.getElementById("add-student").addEventListener("click", function() {
  let studentName = document.getElementById("student-name").value;
  let studentGrade = parseFloat(document.getElementById("student-grade").value);
  if (studentName === "" || isNaN(studentGrade)) {
    alert("Please enter a valid student name and grade.");
    return;
  }
  if (studentGrade < 0 || studentGrade >= 100) {
    alert("Please Enter the valid input between 1 to 100");
    return;
  }
  students.push({ name: studentName, grade: studentGrade });
  document.getElementById("student-name").value = "";
  document.getElementById("student-grade").value = "";
  console.log("====================================");
  console.log(students);
  console.log("====================================");
});
document.getElementById("avd-btn").addEventListener("click", function() {
  if (students.length === 0) {
    alert("No students added yet.");
    return;
  }
  let total = 0;
  students.forEach((student) => {
    total += student.grade;
  });
  let average = total / students.length;
  document.querySelector(
    ".display-grade-avg span"
  ).textContent = average.toFixed(2);
});
document.getElementById("display-grade").addEventListener("click", function() {
  let studentList = document.getElementById("student-list");
  studentList.innerHTML = "";

  students.forEach(function(student) {
    studentList.innerHTML += `<li>${student.name} - ${student.grade}</li>`;
  });
});
