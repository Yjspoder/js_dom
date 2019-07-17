//Select the section with an id of container without using querySelector.
var container = document.getElementById("container");

//Select the section with an id of container using querySelector.
var containerQuery = document.querySelector("#container");

//Select all of the list items with a class of "second".

var listSecond = document.getElementsByClassName("second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

var thirdOl = document.querySelector("ol li.third");

//Give the section with an id of container the text "Hello!".

var hello = document.createElement("p");
hello.innerText = "Hello!";
container.appendChild(hello);

//Add the class main to the div with a class of footer.

var main = document.querySelector(".footer");
main.classList.add("main");


//Remove the class main on the div with a class of footer.

main.classList.remove("main");

//Create a new li element.

var list = document.createElement("li");

//Give the li the text "four".

list.innerText = "four";

//Append the li to the ul element.

var ul = document.getElementsByTagName("ul");

for (var i = 0; i < ul.length; i++) {
    ul[i].appendChild(list);
}
//Loop over all of the list inside the ol tag and give them a background color of "green".

var listOl = document.querySelectorAll("ol li");

for (i = 0 ; i < listOl.length ; ++i){
    listOl[i].style.background = "green";
}


//Remove the div with a class of footer.

document.body.removeChild(main);