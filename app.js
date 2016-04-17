var counterRight = 0;
var totalTries = 4;
var counterWrong = 0;
var userName = prompt ('Hello what\'s your name?').toUpperCase();
var userQuestions = ['Would you believe, I\'ve raised four chickens from little chicks to hens?',
'Do you think I think cooking is one of the most relaxing thing ever?',
'The most fun I have in any of my days is playing with my kids(Yes) or wash dishes after dinner(No)?',
'Yes or No, I currently have a garden project in my new place?',
'The books I read most often are sci-fyi military novels!',
'Guess a number between 1 and 20',
'In this question I\'ll give you a chance to guess a pet I had other than a cat or dog?'];
var yesOrNoQuestions = ['Y', 'YES', 8, 4,];
var outOf7 = ' out of 7';

function hello(){
  console.log ('Hello ' + userName + ' , nice to meet you!');
  alert ('Hello ' + userName + ' nice to meet you! I have a guessing game I would like you to play. Click the "ok" button to contiune.');
}

function answerCounterTotals() {
  if ( counterRight > 5 ) {
    alert(userName + ' great job, you got ' + counterRight + outOf7);
  } else {
    alert ('Yeaaaa, ' + userName + ' you finished! Your total score for this game is ' + counterRight + outOf7 + ' Play again for a better score!');
  }
}

function q1(){
  var question1 = prompt(userQuestions[0]).toUpperCase();
  if (question1 === yesOrNoQuestions[0] || question1 === yesOrNoQuestions[1]){
    counterRight ++;
    console.log ('Yep, Yep ' + question1 + ' ' + counterRight);
    alert('I did, their names were Sunny, Scritch, Sammy, Scratch! ' + question1 + ' correct ' + counterRight);
  } else {
    counterWrong ++;
    console.log ('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch. Wrong Total is ' + counterWrong);
    alert('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch. Wrong Total is ' + counterWrong);
  }
};

function q2(){
  var question2 = prompt(userQuestions[1]).toUpperCase();

  if (question2 === yesOrNoQuestions[0] || question2 === yesOrNoQuestions[1]){
    counterRight ++;
    console.log ('Yea, great guess ' + question2 + ' ' + counterRight);
    alert('That\'s right, great guess!, I think it is one of the most relaxing thing! Corret total is ' + counterRight);
  } else {
    counterWrong ++;
    console.log ('Well actually I thinking cooking is one of the best things ever!' + question2 + ' ' + counterWrong);
    alert('I thinking cooking is one of the best things ever! Wrong = ' + counterWrong);
  }
}

function q3(){
  var question3 = prompt(userQuestions[2]).toUpperCase();
  if (question3 === yesOrNoQuestions[0] || question3 === yesOrNoQuestions[1]){
    counterRight ++;
    console.log('Yep, nothing more fun ' + question3 + ' ' + counterRight);
    alert('Yep, nothing more fun in the world! Correct answers: ' + counterRight );
  } else {
    counterWrong ++;
    console.log('Come on, dishes are the worst! ' + question3 + ' ' + counterWrong);
    alert('Come on, dishes are the worst! Now your Wrong answers total: ' + counterWrong);
  }
}

function q4(){
  var question4 = prompt (userQuestions[3]).toUpperCase();
  if (question4 === yesOrNoQuestions[0] || question4 === yesOrNoQuestions[1]){
    counterRight ++;
    console.log ('Yess, I love fresh vegies they taste so much better ' + question4 + ' ' + counterRight);
    alert('Yesss, I love fresh veg\'s they taste so much better! correct: ' + counterRight);
  } else {
    counterWrong ++;
    console.log('Well, the truth is I currently have the biggest garden I\'ve ever had! ' + question4 + ' ' + counterWrong);
    alert('Well, the truth is I currently have the biggest garden I\'ve ever had! Current wrong answer(s) = ' + counterWrong);
  }
}

function q5(){
  var question5 = prompt (userQuestions[4]).toUpperCase();
  if (question5 === yesOrNoQuestions[0] || question5 === yesOrNoQuestions[1]){
    counterRight ++;
    console.log('That\'s right ' + question5 + 'counterRighttotals ' + counterRight );
    alert ('You guessed right! correct: ' + counterRight);
  } else {
    counterWrong ++;
    console.log('Well, actually I do like those types of novels ' + 'counterRighttotals ' + counterWrong);
    alert ('Well, actually I do like that those types of novels, your new score for wrong answers is ' + counterWrong);
  }
}

var guessNumberGame = 0;

function q6(){
  var answer = yesOrNoQuestions[2];
  while (guessNumberGame < 4 ) {
    var question6 = parseInt(prompt (userQuestions[5]));
    console.log(typeof questio6);
    if (question6 === yesOrNoQuestions[2]) {
      counterRight++;
      alert('You won! Your toal correct answers is: ' + counterRight );
      guessNumberGame = 4;
      console.log('You won! Your total correct answers for the game is: ' + ' counterRighttotals' + counterRight);
    } else if(question6 > yesOrNoQuestions[2]) {
      totalTries --;
      alert('That\'s to high, you have ' + totalTries + ' tries left');
      console.log('TotalTriesLeft ' + totalTries + ' TotalGuesses ' + guessNumberGame );
    } else if (question6 < yesOrNoQuestions[2]) {
      totalTries --;
      alert('That\'s to low , you have ' + totalTries + ' tries left');
      console.log('TotalTriesLeft ' + totalTries + ' TotalGuesses ' + guessNumberGame);
    } else {
      alert('Number please.');
      totalTries --;
      console.log('TotalTriesLeft ' + totalTries + ' TotalGuesses ' + guessNumberGame);
    }
    guessNumberGame ++;
  }
  if (totalTries === 0) {
    alert ('There\'s always next time.');
    counterWrong --;
    console.log ('totalTries ' + totalTries + ' guessNumberGame ' + guessNumberGame);
  }
}

function q7(){
  var petArray = ['MONKEY', 'FISH', 'HEN'];
  var guessTries = 0;
  var numTry = 6;
  while (guessTries < 6) {
    var question7 = prompt (userQuestions[6]).toUpperCase();
    for (var pets = 0; pets < petArray.length; pets++) {
      if (question7 === petArray[pets]) {
        counterRight ++;
        alert ('That\'s right! These are the pets you could have guessed:' + petArray + ' Your total right answers: ' + counterRight);
        console.log('Correct answer was, ' + question7 + ' ' + petArray + ' ' + counterRight );
        pets = petArray.length;
        guessTries = 6;
      }
    } if (guessTries < 6) {
      numTry --;
      guessTries ++;
      console.log('guessTries' + guessTries);
      alert ('No guess again, you have ' + numTry + ' tries more');
      console.log ('numTry left' + numTry);
    } if (numTry === 0) {
      counterWrong ++;
    }
  }
}
hello();
q1();
q2();
q3();
q4();
q5();
q6();
q7();
answerCounterTotals();
