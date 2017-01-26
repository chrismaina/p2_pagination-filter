// variables
var studentUL = document.querySelector(".student-list");
var students = studentUL.querySelectorAll("li");
var page = document.querySelector(".page");
var pageHeader = document.querySelector(".page-header");
var length = students.length;
var pagNumber = Math.ceil(length / 10);
console.log(students);

// function which refreshes student list when links are clicked
var filterList = function(number) {
for (i = 0; i < length; i++) {
    if (i < (number * 10) - 10)   {
    students[i].style.display = 'none';
  } else if (i >= number * 10) {
    students[i].style.display = 'none';
  } else {
    students[i].style.display = 'block';
  }
 }
}

// loop to hide all but first 10 students
for (i = 0; i < length; i++) {
   if (i >= 10) {
     students[i].style.display = 'none';
   }
}

// add search HTML
var search = function (){
  var div = document.createElement('div');
    div.className = "student-search";
  var input = document.createElement('input');
    input.placeholder = "Search for students...";
  var button = document.createElement('button');
    button.innerText = "Search"
  div.appendChild(input);
  div.appendChild(button);
  pageHeader.appendChild(div);

  button.addEventListener("click", submit);
}
search();

// add search feature
function submit() {
  var input = document.querySelector('input')
  var subs = input.value.toLowerCase();
  input.value = "";

   students.forEach(function(li) {
      var name = li.querySelector("h3").textContent
      var email = li.querySelector(".email").textContent

      if (name.includes(subs) || email.includes(subs)) {
        li.style.display = "block";
       } else {
        li.style.display = "none";

      }
   })
 }

// create pagination links
var paginationLinks = function() {

  var div = document.createElement('div');
    div.className = 'pagination';
  var ul = document.createElement('ul');
  // loop
  for (i = 0; i < pagNumber; i++) {
    var li = document.createElement('li');
    var a = document.createElement('a');
      a.href = '#';
      a.innerText = i + 1;

    li.appendChild(a);
    ul.appendChild(li);
    li.addEventListener("click", itemClick)
}
    div.appendChild(ul);
    page.appendChild(div);
}
paginationLinks();

// function to bind pagination links numbers to filter list function
function itemClick(event) {
    event.preventDefault()
    var pageNumber = parseInt(event.target.textContent)
    filterList(pageNumber)
}
