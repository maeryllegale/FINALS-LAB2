// student list initial array
let students = [
  "Albert Pogi",
  "Tester Nagculang",
  "Ana Santos",
  "Juan Dela Cruz",
  "Carlo Gulang",
];

// DOM references
const list = document.getElementById("list");
const count = document.getElementById("count");
const result = document.getElementById("result");
const nameInput = document.getElementById("nameInput");
const indexInput = document.getElementById("indexInput");
const separator = document.getElementById("separator");

// shows a message in the result box
function showResult(message) {
  result.textContent = message;
}

// re-drawing or rendering student list
function render() {
  list.innerHTML = "";

  students.forEach(function (name, i) {
    const indexSpan = document.createElement("span");
    indexSpan.textContent = i;

    li.appendChild(indexSpan);
    li.appendChild(document.createTextNode(name));
    list.appendChild(li);
  });

  // the length of students in the array
  count.textContent = students.length;
}

// array operations

// adding a student in the list
function addStudent(name) {
  return students.push(name);
}

// removing last student in the list
function removeLastStudent() {
  return students.pop();
}

// finding a student at an index
function findStudent(index) {
  return students.at(index);
}

// combines all items into one string
function joinStudents(separator) {
  return students.join(separator);
}

// each students separated by comma
function studentsToString() {
  return students.toString();
}

// event handlers

function onAdd() {
  const name = nameInput.value.trim();

  if (name === "") {
    showResult("Please enter a student name first.");
    return;
  }

  const newLength = addStudent(name);
  render();
  showResult('Added "' + name + '" to the list.');

  nameInput.value = "";
  nameInput.focus();
}

function onRemove() {
  if (students.length === 0) {
    showResult("The list is already empty.");
    return;
  }

  const removed = removeLastStudent();
  render();
  showResult('Removed "' + removed + '" from the list.');
}

function onFind() {
  const raw = indexInput.value.trim();

  // for validation (empty or non-whole number)
  if (raw === "" || !Number.isInteger(Number(raw))) {
    showResult("Please enter a whole number for the index.");
    return;
  }

  const index = Number(raw);
  const found = findStudent(index);

  // for validation (out of range)
  if (found === undefined) {
    showResult("Index " + index + " is out of range.");
    return;
  }

  showResult("Index " + index + ': "' + found + '"');
}

function onJoin() {
  if (students.length === 0) {
    showResult("The list is empty. Nothing to join.");
    return;
  }

  showResult(joinStudents(separator.value));
}

function onToString() {
  if (students.length === 0) {
    showResult("The list is empty. Nothing to convert.");
    return;
  }

  showResult(studentsToString());
}

// on page load
render();
showResult("Click a button to see the result.");
