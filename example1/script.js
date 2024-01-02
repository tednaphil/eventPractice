var addNewButton = document.querySelector('.add-new');
var parent = document.querySelector('.parent');
var allButtons = document.querySelectorAll('.parent .click-me');


addNewButton.addEventListener('click', createButton);

parent.addEventListener('click', showAlert)

// for(var i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener('click', showAlert);
// }

function showAlert(e) {
  // console.log(e.target)
  if (e.target.className === 'click-me') {
    alert(`You clicked me!`)
  }
}

// what edge cases are there for inclusion in function vs event listener?
function createButton() {
  var newButton = document.createElement('button');
  newButton.className = 'click-me';
  newButton.innerText = "New click me button!";
  parent.appendChild(newButton);
}
