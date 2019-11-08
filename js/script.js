/******************************************
Treehouse Techdegree: FSJS project 2
******************************************/
   
//Declare Global Variables

const listItems = document.getElementsByClassName('student-item');
const pageItems = 10;
const aLinks = document.getElementsByTagName('a');

//Hide all the items except the first 10 on the first page

function showPage(list, page) {
   let startIndex = (page * pageItems) - pageItems;
   let endIndex = page * pageItems;
   for (let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex){
         list[i].style.display = "block";
      } else {
      	list[i].style.display = "none";
      }
   }
}

//Generate, append, and add functionality to the page buttons.

function appendPageLinks(list) {
const nodeDiv = document.createElement("DIV");
const nodeUl = document.createElement("UL");
nodeDiv.appendChild(nodeUl);
nodeDiv.className = "pagination";

   for(let j = 1; j <= Math.ceil(listItems.length / 10) ; j++){
      const nodeLi = document.createElement("LI");
      nodeUl.appendChild(nodeLi);
      nodeLi.innerHTML = '<a href="#">' + j + '</a>';
   }

document.querySelector('.page').appendChild(nodeDiv);

// on intital page load of page 1, set the 1st a tag to active
nodeUl.firstChild.firstChild.className = "active";

//add event listener to the pagination buttons
   for(let k = 0; k < aLinks.length; k++){
      aLinks[k].addEventListener('click', (event) => {
      let targetedEvent = event.target;
      let pageNumber = targetedEvent.textContent;
      showPage(listItems, pageNumber);
         for(let l = 0; l < aLinks.length; l++){
            aLinks[l].classList.remove("active");
            }
      targetedEvent.classList.add("active");
      });
   }
}

//call the functions that generate the initial page and the pagination.
showPage(listItems, 1);
appendPageLinks(listItems);

