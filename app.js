
var userName = prompt ('Hello what\'s your name?').toUpperCase();
console.log ('Hello' + ' ' + userName + ' ' + ', nice to meet you!');
alert ('Hello' + ' ' + userName + ' ' + 'nice to meet you! I have a guessing game I would like you to play. Click the "ok" button to contiune.');

var question1 = prompt ('Would you believe, I\'ve raised four chickens from little chicks to hens?').toUpperCase();

if (question1 === 'Y' || question1 === 'YES' ){
  console.log ('Yep, Yep' + ' ' + question1);
  alert ('I did, their names were Sunny, Scritch, Sammy, Scratch!');
}else{
  console.log ('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch.' + ' ' + question1);
  alert('Well actually I did, crazy I know; they even had names: Sammy, Sunny, Scritch, Scratch.');
}

alert('Ok, you know about my chickens, I have another question for you.');

var question2 = prompt ('Do you think I think cooking is one of the most relaxing thing ever?').toUpperCase();

if (question2 === 'YES' || question2 === 'Y'){
  console.log ('Yea, great guess' + ' ' + question2);
  alert ('That\'s right, great guess!, one of the most relaxing things for me to do is cook dinner!');
} else {
  console.log ('I thinking cooking is one of the best things ever!' + ' ' + question2);
  alert ('I thinking cooking is one of the best things ever!');
}
alert('Ok, more guessing, here we go!');

var question3 = prompt ('The most fun I have in any of my days is playing with my kids(Yes) or wash dishes after dinner(No)?').toUpperCase();
if (question3 === 'YES' || question3 === 'Y'){
  console.log ('Yep, nothing more fun' + ' ' + question3);
  alert('Yep, nothing more fun in the world!');
}else{
  console.log ('Come on, dishes are the worst!' + ' ' + question3);
  alert('Come on, dishes are the worst!');
}

var question4 = prompt ('Yes or No, I currently have a garden project in my new place?').toUpperCase();
if (question4 === 'YES' || 'Y'){
  console.log ('Yess, I love fresh vegies they taste so much better' + ' ' + question4);
  alert('Yesss, I love fresh veg\'s they taste so much better!');
}else{
  console.log('Well, the truth is I currently have the biggest garden I\'ve ever had!' + ' ' + question4);
  alert('Well, the truth is I currently have the biggest garden I\'ve ever had!');
}

var question5 = prompt ('This is the final question to guess. The books I read most often are sci-fyi military novels!').toUpperCase();
if (question5 === 'YES' || question5 === 'Y'){
  console.log('That\'s right' + ' ' + question5);
  alert ('You guessed right!');
} else {
  console.log('Well, actually I do like those types of novels' + ' ' + question5);
  alert ('Well, actually I do like that those types of novels');
}
alert ('This is the end of the game, thanks for playing!');
