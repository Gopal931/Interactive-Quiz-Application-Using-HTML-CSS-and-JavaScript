let questions=[
    {question:"What is Your name?",
     answer:[
        {text:"Gopal",correct:false},
        {text:"Rajan",correct:true},
        {text:"Ravi",correct:false},
        {text:"Pankaj",correct:false},
     ]
    },
    {      question:"What is Your age?",
      answer:[
          {text:"21",correct:false},
           {text:"31",correct:true},
          {text:"41",correct:false},
           {text:"17",correct:false},
      ]
       },
       {question:"What is the name of your homeTown?",
        answer:[ 
           {text:"janakpur",correct:false},
           {text:"Sundarpur",correct:true},
           {text:"Paraul",correct:false},
           {text:"Ajgwa",correct:false},
        ]
       }
    
]
let questionEle=document.querySelector(".question");
let ansBox=document.querySelector(".answer");
let nextButton=document.querySelector(".next-button");

let currentQuestionIndex =0;
let score=0;

function startQuiz(){
   currentQuestionIndex=0;
   score=0;
   nextButton.innerHTML= "Next";
   showQuestion();
}
function showQuestion(){
   resetState();
   let currentQuestion =questions[currentQuestionIndex];
   let QuestionNo=currentQuestionIndex +1;
   questionEle.innerHTML=QuestionNo +". "+currentQuestion.question;

   currentQuestion.answer.forEach(answer =>{
     let button=document.createElement("button");
     button.classList.add("ans");
     button.innerHTML=answer.text;
     ansBox.appendChild(button);
     
     button.addEventListener("click" , (e)=>{
      e.target.disabled = true;
        if (answer.correct){
         e.target.classList.add("correct");
         score++;
        }
         else {
            e.target.classList.add("incorrect");
         }
         Array.from(ansBox.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled =true;
         });
         nextButton.style.display="block";
     });
   });
}
function resetState(){
   nextButton.style.display="none";
   while(ansBox.firstChild){
      ansBox.removeChild(ansBox.firstChild);
   }
}
nextButton.addEventListener("click", () => {
   currentQuestionIndex++;
   if (currentQuestionIndex < questions.length) {
       showQuestion();
   } else {
       showResults();
   }
});
function showResults() {
         resetState();
         questionEle.innerHTML = `Quiz Finished! Your score is ${score}/${questions.length}`;
         nextButton.style.display = "none";  // Hide Next button after quiz ends
      }
startQuiz();