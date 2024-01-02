var addNewButton = document.querySelector('.add-new');
var parent = document.querySelector('.parent');

addNewButton.addEventListener('click', createButton);

parent.addEventListener('click', function(event) {
  if (event.target.className === 'click-me') {showAlert()
    // do your action on your 'button' or whatever it is you're listening for
  }
});

function showAlert() {
  alert('You clicked me!');
}

function createButton() {
  var newButton = document.createElement('button');
  newButton.className = 'click-me';
  newButton.innerText = "New click me button!";
  parent.appendChild(newButton);
}
