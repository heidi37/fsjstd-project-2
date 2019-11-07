/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



const listItems = document.getElementsByClassName('student-item');
const pageItems = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.
***/

function showPage(list, page) {
   let startIndex = (page * pageItems) - pageItems;
   let endIndex = page * pageItems;
   for (let i = 0; i < list.length; i++) {
      if(i >= startIndex && i < endIndex){
         list[i].style.display = "block";
      }
   }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks(list) {

const nodeDiv = document.createElement("DIV");
const nodeUl = document.createElement("UL");
nodeDiv.appendChild(nodeUl);
nodeDiv.className = "pagination";

   for(let j = 1; j <= listItems.length / 10 ; j++){
      const nodeLi = document.createElement("LI");
      nodeUl.appendChild(nodeLi);
      nodeLi.innerHTML = '<a href="#">' + j + '</a>';
   }

document.querySelector('.page').appendChild(nodeDiv);

// on intital page load of page 1, set the 1st a tag to active
nodeUl.firstChild.firstChild.className = "active";

let aLinks = document.getElementsByTagName('a');

   //add event listener to the a tags
   for(let k = 0; k < aLinks.length; k++){
      
      aLinks[k].addEventListener('click', (event) => {
      let targetedEvent = event.target;
      let pageNumber = targetedEvent.innerHTML;
      showPage(listItems, pageNumber);
      console.log(pageNumber);
      console.log(targetedEvent);

         for(let l = 0; l < aLinks.length; l++){
            aLinks[l].classList.remove("active");
            }
      targetedEvent.classList.add("active");
      });
   }
}


showPage(listItems, 5);
appendPageLinks(listItems);

