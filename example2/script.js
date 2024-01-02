var grandParent = document.querySelector('.grandparent');
var parent = document.querySelector('.parent');
var button = document.querySelector('#click-me');

grandParent.addEventListener('click', function(e) {
    console.log(`event.target:`, e.target);
    console.log(`grandparent properties:`, e)
    // console.log('Grandparent');
});

// parent.addEventListener('click', function(e) {
//     console.log(`parent properties:`, e);
// });

// button.addEventListener('click', function(e) {
//     console.log(`button properties:`, e);
// });