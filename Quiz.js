const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionCantainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElemnnt = document.getElementById("answer-buttons");

let shuffledQuestion, currentQuestinIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestinIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestion = question.sort(() => Math.random() - 0.5);
  currentQuestinIndex = 0;
  questionCantainerElement.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestion[currentQuestinIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerText = answers.text;
    button.classList.add("btn");
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElemnnt.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonElemnnt.firstChild) {
    answerButtonElemnnt.removeChild(answerButtonElemnnt.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElemnnt.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestion.length > currentQuestinIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const question = [
  {
    question: "what is 2 + 2 ?",
    answers: [
      { text: 4, correct: true },
      { text: 22, correct: false },
    ],
  },

  {
    question: "President of India ?",
    answers: [
      { text: "Narendra Modi", correct: true },
      { text: "Amit Shah", correct: false },
      { text: "Rahul Gandhi", correct: false },
      { text: "Arvind Kejriwal", correct: false },
    ],
  },

  {
    question: "City Of Orange ?",
    answers: [
      { text: "Pune", correct: false },
      { text: "Nanded", correct: false },
      { text: "Mumbai", correct: false },
      { text: "Nagpur", correct: true },
    ],
  },
];
