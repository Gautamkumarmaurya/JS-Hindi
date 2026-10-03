console.log("hitesh")
const buttons = document.querySelectorAll('.color-buttons');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const colors = e.target.id
    
    switch (colors) {

        case 'red':
            body.style.backgroundColor = e.target.id // professional code  
            break;

        case 'blue' :
            body.style.backgroundColor = e.target.id
            break;
            
        case 'green' :
            body.style.backgroundColor = 'green' // hard coded
            break;

        case 'yellow' :
            body.style.backgroundColor = 'yellow'
            break;

        case 'purple':
            body.style.backgroundColor = e.target.id
            
        default:
            break;
    }
  });
});







/*
        // project 1 Completed by Hitesh Chaudhary 
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});



*/