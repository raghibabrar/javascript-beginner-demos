const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "Python", "JavaScript"],
        answer: "JavaScript"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const resultElement = document.getElementById("result");

function showQuestion() {
   
    optionsElement.innerHTML = ""; 

    if (currentQuestionIndex >= quizData.length) {
        questionElement.textContent = "Quiz Finished!";
        resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
        return;
    }

    let currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        
        button.addEventListener("click", function() {
            if (option === currentQuestion.answer) {
                score++;
            }
            
            currentQuestionIndex++;
            showQuestion();
        });

        optionsElement.appendChild(button);
    });
}

showQuestion();