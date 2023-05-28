//Words to Display
//1 to 20
const allWord = [
  'one','two','three','four',
  'five','six','seven','eight',
  'nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'
 ];
  
  
const words = document.querySelector('.words');
const screen = document.querySelector('.screen');
const right = document.querySelector('.right p');
const wrong = document.querySelector('.wrong p');


let rightAnswer = 0;
let wrongAnswer = 0;
let i = 0;
let currect = [];

window.addEventListener('load',game);

function game () {
  screen.style.color = null;
  screen.style.color = null;
  wrong.innerText = wrongAnswer;
  right.innerText = rightAnswer;
  //Get a random index in Array
  const index = Math.floor(Math.random() * allWord.length);
  //Array of Word
  const randomWord = allWord[index].split('');
  //Randmizing letters in word
  const randomiz = randomWord.sort(a => Math.random() - 0.5);
  //Calling load function
  load(randomiz, allWord[index].toUpperCase());
  
}


function load(word, w) {
  //Clearing both elements
  screen.innerHTML = '';
  words.innerHTML = '';
  //Seting Word in Dom
  for (let i=0;i<word.length;i++) {
    const screenSpan = document.createElement('span');
    screen.append(screenSpan);
    
    const span = document.createElement('span');
    span.innerText = word[i];
    words.append(span);
    //Listener for letters
    span.addEventListener('click',(e)=> {
      checkValues(e.target, w);
    });
    
  };

}

let prev = 0;
let next = 1;
function checkValues (span, word) {
  //Set And Remove Animation class
  if(next < screen.childElementCount && 
    span.innerText != '') {
    //remove blink class to previous element
    screen.children[prev].classList.remove('blink');
    screen.children[prev].style.borderBottom = null;
    prev++;
    
    //Set blink class to next element
    screen.children[next].className = 'blink';
    screen.children[next].style.borderBottom = '1px solid yellow';
    next++
  };
  
  
  if (i < screen.childElementCount && span.innerText != '') {
    //Set values when user click on word
   screen.children[i].innerText = span.innerText;
   currect.push(span.innerText);
   //remove that word which is clicked
   span.innerText = '';
   //change index
   i++;
   
   if (i == screen.childElementCount) {
     //Matching both values Match
     if (currect.join('') == word) {
       screen.style.color = 'green'
       screen.innerHTML = '<h2>RIGHT</h2>';
       rightAnswer++;
       right.innerText = rightAnswer
       //Or Not Match
       }else {
       screen.style.color = 'red'
       screen.innerHTML = '<h2>WRONG</h2>';
       wrongAnswer++;
       wrong.innerText = wrongAnswer
     };
     //new Word after one minute
     setTimeout(() => {
        i = 0;
        currect = [];
       game();
     }, 1000);
     //blink animation 
      prev = 0;
      next = 1;
   };
   
  };
 
}

//Kshapi 