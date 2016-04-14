function hello(){
  var userName = prompt ('Hello what\'s your name?').toUpperCase();
  console.log ('Hello ' + userName + ' , nice to meet you!');
  alert ('Hello ' + userName + ' nice to meet you! I have a guessing game I would like you to play. Click the "ok" button to contiune.');
}

hello();

var counterRight = 0;
var counterWrong = 0;

function answerCounterTotals(){
  var counterScore = 'Your current score is';
  alert('Your total number correct is: ' + counterRight + ' out of 7.');
}

function q1(){
  var question1 = prompt ('Would you believe, I\'ve raised four chickens from little chicks to hens?').toUpperCase();
  if (question1 === 'Y' || question1 === 'YES' ){
    counterRight ++;
    console.log ('Yep, Yep ' + question1 + ' ' + counterRight);
    alert ('I did, their names were Sunny, Scritch, Sammy, Scratch! ' + question1 + ' correct ' + counterRight);
  } else {
    counterWrong ++;
    console.log ('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch. Wrong Total is ' + counterWrong);
    alert('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch. Wrong Total is ' + counterWrong);
  }
  counterRight;
  alert('Ok, you know about my chickens, I have another question for you');
};

q1();

function q2(){
  var question2 = prompt ('Do you think I think cooking is one of the most relaxing thing ever?').toUpperCase();

  if (question2 === 'YES' || question2 === 'Y'){
    counterRight ++;
    console.log ('Yea, great guess ' + question2 + ' ' + counterRight);
    alert ('That\'s right, great guess!, I think it is one of the most relaxing thing! Corret Total Is ' + counterRight);
  } else {
    counterWrong ++;
    console.log ('I thinking cooking is one of the best things ever!' + question2 + ' ' + counterWrong);
    alert ('I thinking cooking is one of the best things ever! ' + counterWrong);
  }
  counterRight;
}

q2();

function q3(){
  var question3 = prompt ('The most fun I have in any of my days is playing with my kids(Yes) or wash dishes after dinner(No)?').toUpperCase();
  if (question3 === 'YES' || question3 === 'Y'){
    counterRight ++;
    console.log ('Yep, nothing more fun ' + question3 + ' ' + counterRight);
    alert('Yep, nothing more fun in the world! correct answers: ' + counterRight );
  } else {
    counterWrong ++;
    console.log ('Come on, dishes are the worst! ' + question3 + ' ' + counterWrong);
    alert('Come on, dishes are the worst! ' + counterWrong);
  }
  counterRight;
}

q3();

function q4(){
  var question4 = prompt ('Yes or No, I currently have a garden project in my new place?').toUpperCase();
  if (question4 === 'YES' || 'Y'){
    counterRight ++;
    console.log ('Yess, I love fresh vegies they taste so much better ' + question4 + ' ' + counterRight);
    alert('Yesss, I love fresh veg\'s they taste so much better! correct: ' + counterRight);
  } else {
    counterWrong ++;
    console.log('Well, the truth is I currently have the biggest garden I\'ve ever had! ' + question4 + ' ' + counterWrong);
    alert('Well, the truth is I currently have the biggest garden I\'ve ever had! ' + counterWrong);
  }
  counterRight;
}

q4();

function q5(){
  var question5 = prompt ('The books I read most often are sci-fyi military novels!').toUpperCase();
  if (question5 === 'YES' || question5 === 'Y'){
    counterRight ++;
    console.log('That\'s right ' + question5 + ' ' + counterRight);
    alert ('You guessed right! correct: ' + counterRight);
  } else {
    console.log('Well, actually I do like those types of novels ' + question5 + ' ' + counterWrong);
    alert ('Well, actually I do like that those types of novels ' + counterWrong);
  }
  counterRight;
}

q5();

function q6(){
  var guessNumberGame = 0;
  var answer = 8;
  while (guessNumberGame < 4 ) {
    var question6 = parseInt(prompt ('Guess a number between 1 and 20, I\'ll give you 4 tries'));
    console.log(typeof questio6);
    if (question6 === 8) {
      alert ('You won!' );
      guessNumberGame = 4;
    } else if (question6 > 8) {
      alert ('That\'s to high');
    } else if (question6 < 8) {
      alert ('That\'s to low');
    } else {
      alert('Number please.');
    }
    guessNumberGame ++;
  }
}

q6();

function q7(){
  var petArray = ['MONKEY', 'FISH', 'HEN'];
  var guessTries = 0;
  var decreaseTries = 6;
  while (guessTries < 6) {
    var question7 = prompt ('In this question I\'ll give you ' + decreaseTries + ' tries to guess one of these. What is a pet I had other than a cat or dog?').toUpperCase();
    for (i = 0; i < petArray.length; i++) {
      if (question7 === petArray[i]) {
        alert ('That\'s right! ' + petArray + ' correct: ' + counterRight);
        console.log('Correct answer was, ' + question7);
        i = petArray.length;
        guessTries = 6;
        counterRight ++;
        console.log([i], 'is i');
      }
    }
    guessTries ++;
    decreaseTries --;
    alert('Sorry that is an incorrect answer, try\'s left: ' + decreaseTries);
  }
}

q7();

answerCounterTotals();
prompt ( 'Yeaaaa, ' + userName + ' you finished! Your total score for this game is ' + counterRight + ' Thanks for playing!');
