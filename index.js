let score = 0;

const quizDirections = alert(
  "You're about to begin a brief pop-quiz! Please answer carefully, using 1, 2, or 3.",
);
const quizQuestion1 = prompt(`Question 1: What sound does a cat make?
    1 - Meow
    2 - Woof
    3 - Mooo`);

const quizAnswer1 = Number(quizQuestion1);

if (Number.isNaN(quizAnswer1)) {
  alert("I beg your finest pardon good sir, please use numbers!");
} else if (quizAnswer1 < 1 || quizAnswer1 > 3) {
  alert("You should try 1, 2, or 3. (only)");
} else if (quizAnswer1 === 1) {
  score = score + 1;
  alert(`Most excellent! Your current score is ${score}! Next question...`);
} else if (quizAnswer1 === 2 || quizAnswer1 === 3) {
  alert("RRRRR! Wrong, better luck next time!");
}

const quizQuestion2 = prompt(`How many legs does a spider have?
    1 - Six
    2 - Eight
    3 - Four`);

const qA2 = Number(quizQuestion2);

if (Number.isNaN(qA2)) {
  alert("I beg your finest pardon good sir, please use numbers!");
} else if (qA2 < 1 || qA2 > 3) {
  alert("You should try 1, 2, or 3. (only)");
} else if (qA2 === 2) {
  score = score + 1;
  alert(`Very well done! Your new score is ${score}! Next question...`);
} else if (qA2 === 1 || qA2 === 3) {
  alert("That is incorrect, I'm so sorry! Moving on...");
}

const quizQuestion3 = prompt(`Which of the following shapes has 3 sides?
    1 - Circle
    2 - Square
    3 - Triangle`);

const qA3 = Number(quizQuestion3);

if (Number.isNaN(qA3)) {
  alert("I beg your finest pardon good sir, please use numbers!");
} else if (qA3 < 1 || qA3 > 3) {
  alert("You should try 1, 2, or 3. (only)");
} else if (qA3 === 3) {
  score = score + 1;
  alert(`Very well done! Your new score is ${score}!`);
} else if (qA3 === 1 || qA3 === 2) {
  alert("That is incorrect, I'm so sorry!");
}

if (score === 0) {
  alert(`I'm so sorry, you got ${score} answers correct. Please try again!`);
} else if (score === 3) {
  alert(
    `Winner winner chicken dinner! You got ${score} answers right and have set a new high score!`,
  );
} else {
  alert(
    `A triumphant attempt, with ${score} of 3 answers correct! You're on the right track.`,
  );
}
