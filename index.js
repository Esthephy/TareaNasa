const images = [
  './img/model1_withoutbackground.png',
  './img/model2_withoutbackground.png',
  './img/model3_withoutbackground.png'
];


const indices = [0, 1, 2];

 


document.addEventListener("DOMContentLoaded", function () {
 
  const arrowLeft = document.getElementById('arrow-left');
  const arrowRight = document.getElementById('arrow-right');

  if (arrowLeft && arrowRight) {
    arrowLeft.addEventListener('click', showPreviousImage);
    arrowRight.addEventListener('click', showNextImage);
  }
  
  
  const categories = document.querySelectorAll(".category");
  categories.forEach(function (category) {
    category.addEventListener("click", function () {
      category.classList.toggle("category-activate");
    });
  });
  
});

 


function updateImage(i) {
  const imgLeft = document.getElementById('img-left');
  const imgMiddle = document.getElementById('img-middle');
  const imgRight = document.getElementById('img-right');
  
  switch (i) {
    case 0:
      imgLeft.src = images[indices[i]];
      break;
    case 1:
      imgMiddle.src = images[indices[i]];
      break;  
    case 2:
      imgRight.src = images[indices[i]];
      break;  
     
  } 
}

function showPreviousImage() {
  console.log("previous");
  let lenghtList=3;
  for(let i=0;i<lenghtList;i++){
    
    indices[i]=indices[i]-1;

    switch (indices[i]) {
      case -1:
        indices[i]=2;
        break;
      case 3:
        indices[i]=0;
        break;  
       
    }
    updateImage(i);  
  }

 
}

function showNextImage() {
  console.log("next");
  let lenghtList=3;
  for(let i=0;i<lenghtList;i++){
    
    indices[i]=indices[i]+1;

    switch (indices[i]) {
      case -1:
        indices[i]=2;
        break;
      case 3:
        indices[i]=0;
        break;  
       
    }
    updateImage(i);  
  }
}

