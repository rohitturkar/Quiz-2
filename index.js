var readlineSync=require('readline-sync');

var userName=readlineSync.question("what is your name: ");
var score=0;
console.log(`Welcome ${userName}, this is the quiz game to check your general knowledge \n `);
console.log("Here are total 5 questions,each question carry one mark \n");

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("\n")
    console.log("your are right");
    score=score+1;
    console.log(`your score is ${score}`);
  }
  else{
     console.log("\n")
    console.log("your are wrong");
    console.log(`your score is ${score}`);
  }
}


var questions=[
  {
    question:"1.Who invented the telephone? \n a. Thoma Alva Edison  b.Alexander Flamming  c.The Wright Brothers d.Albert Einstein \n Ans:-",
    answer:'b',
  },
  {
    question:"2.which is the smallest planet in our solar system? \n a.Earth b.Venus c.Mars d.Mercury \n Ans:-",
    answer:'d',
  },
  {
    question:"3.which is the hottest planet in our solar system? \n a.Venus b.Jupiter c.Mars d.sun \n Ans:-",
    answer:'a',
  },
  {
    question:"4.which is the following is the capital of Arunachal pradesh? \n a.Banglore b.Itanagar c.Imphal d.delhi \n Ans:-",
    answer:'b',
  },
  {
    question:"5.Which of the following is not example of an Operating System? \n a.Windows 98 b.BSD unix c.Microsoft office xp d.Red Hat linux \n Ans:-",
    answer:'c',
  }
  
]

for(var i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer);
  console.log("\n")
}
console.log("_______________________________");
console.log("your total score is "+score);
console.log("_______________________________");