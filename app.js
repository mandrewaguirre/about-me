
var userName = prompt ('Hello what\'s your name?').toUpperCase();
console.log ('Hello ' + userName + ' , nice to meet you!');
alert ('Hello' + ' ' + userName + ' ' + 'nice to meet you! I have a guessing game I would like you to play. Click the "ok" button to contiune.');
var counterRight = 0;
var counterWrong = 0;
var counterScore = ' Your current score is ';
var question1 = prompt ('Would you believe, I\'ve raised four chickens from little chicks to hens?').toUpperCase();
var sp = ' ';
if (question1 === 'Y' || question1 === 'YES' ){
  counterRight ++;
  console.log ('Yep, Yep' + ' ' + question1 + sp + counterRight);
  alert ('I did, their names were Sunny, Scritch, Sammy, Scratch!' + ' ' + question1 + sp + counterRight);
}else{
  counterWrong ++;
  console.log ('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch.' + sp + counterWrong);
  alert('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch.' + sp + counterWrong);
}

alert('Ok, you know about my chickens, I have another question for you');

var question2 = prompt ('Do you think I think cooking is one of the most relaxing thing ever?').toUpperCase();

if (question2 === 'YES' || question2 === 'Y'){
  counterRight ++;
  console.log ('Yea, great guess' + ' ' + question2 + counterRight);
  alert ('That\'s right, great guess!, one of the most relaxing things for me to do is cook dinner!' + sp + counterRight);
}else{
  counterWrong ++;
  console.log ('I thinking cooking is one of the best things ever!' + ' ' + question2 + sp + counterWrong);
  alert ('I thinking cooking is one of the best things ever!' + sp + counterWrong);

}

var question3 = prompt ('The most fun I have in any of my days is playing with my kids(Yes) or wash dishes after dinner(No)?').toUpperCase();
if (question3 === 'YES' || question3 === 'Y'){
  counterRight ++;
  console.log ('Yep, nothing more fun' + ' ' + question3 + sp + counterRight);
  alert('Yep, nothing more fun in the world!' + sp + counterRight );
}else{
  counterWrong ++;
  console.log ('Come on, dishes are the worst!' + ' ' + question3 + sp + counterWrong);
  alert('Come on, dishes are the worst!' + sp + counterWrong);
}

var question4 = prompt ('Yes or No, I currently have a garden project in my new place?').toUpperCase();
if (question4 === 'YES' || 'Y'){
  counterRight ++;
  console.log ('Yess, I love fresh vegies they taste so much better' + ' ' + question4 + sp + counterRight);
  alert('Yesss, I love fresh veg\'s they taste so much better!' + sp + counterRight);
}else{
  counterWrong ++;
  console.log('Well, the truth is I currently have the biggest garden I\'ve ever had!' + ' ' + question4 + sp + counterWrong);
  alert('Well, the truth is I currently have the biggest garden I\'ve ever had!' + sp + counterWrong);
}

var question5 = prompt ('This is the final question to guess. The books I read most often are sci-fyi military novels!').toUpperCase();
if (question5 === 'YES' || question5 === 'Y'){
  console.log('That\'s right' + ' ' + question5 + sp + counterRight);
  alert ('You guessed right!' + sp + counterRight);
} else {
  console.log('Well, actually I do like those types of novels' + ' ' + question5 + sp + counterWrong);
  alert ('Well, actually I do like that those types of novels' + sp + counterWrong);
}
var petArray = ['MONKEY', 'FISH', 'HEN'];
var guessTries = 0;
var question7;
while (guessTries < 6) {
  question7 = prompt ('In this question I\'ll give you 6 tries to guess one of these. ' + 'What is a pet I had other than a cat or dog?').toUpperCase();
  for (i = 0; i < petArray.length; i++) {
    if (question7 === petArray[i]) {
      alert ('That\'s right!' + ' ' + petArray + counterRight);
      console.log('Correct answer was',question7);
      i = petArray.length;
      guessTries = 6;
      console.log([i], 'is i');
    }
  }
  guessTries ++;
}
prompt ( 'Yeaaaa, ' + userName + ' you finished! Your total score for this game is ' + counterRight + sp + 'Thanks for playing!');
