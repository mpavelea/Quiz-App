const quizData = {
  math: [
    {
      question: "What is the result of 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswers: ["4"],
    },
    {
      question: "Solve for x: 3x - 7 = 14",
      options: ["3", "5", "7", "8"],
      correctAnswers: ["7"],
    },
    {
      question: "What is the area of a square with a side length of 6 units?",
      options: ["12", "18", "24", "36"],
      correctAnswers: ["36"],
    },
    {
      question: "What is the value of π (pi) to two decimal places?",
      options: ["3.14", "3.21", "3.25", "3.50"],
      correctAnswers: ["3.14"],
    },
    {
      question:
        "If a triangle has angles of 90°, 45°, and 45°, what type of triangle is it?",
      options: ["Equilateral", "Isosceles", "Scalene", "Right-angled"],
      correctAnswers: ["Right-angled"],
    },
    {
      question: "What is the slope-intercept form of a linear equation?",
      options: ["y = mx + b", "y = ax^2 + bx + c", "y = a/b", "y = sqrt(x)"],
      correctAnswers: ["y = mx + b"],
    },
    {
      question: "If a = 3 and b = 5, what is the value of a^2 + b^2?",
      options: ["14", "20", "25", "34"],
      correctAnswers: ["34"],
    },
    {
      question:
        "What is the volume of a cylinder with radius 4 units and height 8 units?",
      options: ["32π", "64π", "128π", "256π"],
      correctAnswers: ["128π"],
    },
    {
      question: "If log(base 2) 8 = x, what is the value of x?",
      options: ["2", "3", "4", "5"],
      correctAnswers: ["3"],
    },
    {
      question: "What is the quadratic formula?",
      options: [
        "x = (-b ± √(b² - 4ac)) / 2a",
        "x = a² + b² = c²",
        "E = mc²",
        "sin²θ + cos²θ = 1",
      ],
      correctAnswers: ["x = (-b ± √(b² - 4ac)) / 2a"],
    },
  ],
  biology: [
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswers: ["Mitochondria"],
    },
    {
      question: "What is the function of red blood cells?",
      options: [
        "Transport oxygen to cells",
        "Produce antibodies",
        "Digest food",
        "Produce insulin",
      ],
      correctAnswers: ["Transport oxygen to cells"],
    },
    {
      question: "Which organ produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Stomach"],
      correctAnswers: ["Pancreas"],
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Brain", "Skin", "Lungs"],
      correctAnswers: ["Skin"],
    },
    {
      question: "What is DNA's full name?",
      options: [
        "Deoxyribonucleic Acid",
        "Ribonucleic Acid",
        "Deoxyribose Nucleotide Acid",
        "Ribose Nucleotide Acid",
      ],
      correctAnswers: ["Deoxyribonucleic Acid"],
    },
    {
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswers: ["Carbon Dioxide"],
    },
    {
      question: "What is the function of the human heart?",
      options: [
        "Pump blood to the lungs",
        "Pump blood to the body",
        "Digest food",
        "Filter waste",
      ],
      correctAnswers: ["Pump blood to the body"],
    },
    {
      question: "What is the process by which organisms develop and grow?",
      options: ["Photosynthesis", "Respiration", "Metabolism", "Development"],
      correctAnswers: ["Development"],
    },
    {
      question: "Which of the following is a mammal?",
      options: ["Snake", "Fish", "Eagle", "Dog"],
      correctAnswers: ["Dog"],
    },
    {
      question: "What is the purpose of the circulatory system?",
      options: [
        "Transport nutrients",
        "Regulate body temperature",
        "Exchange gases",
        "All of the above",
      ],
      correctAnswers: ["All of the above"],
    },
  ],
  geography: [
    {
      question: "Which continent is known as the 'Land of the Rising Sun'?",
      options: ["Asia", "Europe", "Africa", "Australia"],
      correctAnswers: ["Asia"],
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      correctAnswers: ["Canberra"],
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
      correctAnswers: ["Nile"],
    },
    {
      question: "In which mountain range is Mount Everest located?",
      options: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
      correctAnswers: ["Himalayas"],
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Antarctica", "Arabian"],
      correctAnswers: ["Antarctica"],
    },
    {
      question: "Which country is known as the 'Land of the Midnight Sun'?",
      options: ["Norway", "Canada", "Russia", "Sweden"],
      correctAnswers: ["Norway"],
    },
    {
      question: "What is the capital of Brazil?",
      options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      correctAnswers: ["Brasília"],
    },
    {
      question: "Which ocean is the largest?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswers: ["Pacific"],
    },
    {
      question: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Yen", "Ringgit"],
      correctAnswers: ["Yen"],
    },
    {
      question: "In which country is the Great Barrier Reef located?",
      options: ["Australia", "Brazil", "Mexico", "Thailand"],
      correctAnswers: ["Australia"],
    },
  ],
  history: [
    {
      question: "Who was the first President of the United States?",
      options: [
        "Thomas Jefferson",
        "John Adams",
        "George Washington",
        "James Madison",
      ],
      correctAnswers: ["George Washington"],
    },
    {
      question: "In which year did Christopher Columbus reach the Americas?",
      options: ["1492", "1517", "1607", "1776"],
      correctAnswers: ["1492"],
    },
    {
      question: "What event marked the beginning of World War I?",
      options: [
        "Assassination of Archduke Franz Ferdinand",
        "Signing of the Treaty of Versailles",
        "Bombing of Pearl Harbor",
        "D-Day",
      ],
      correctAnswers: ["Assassination of Archduke Franz Ferdinand"],
    },
    {
      question: "Who wrote 'The Communist Manifesto'?",
      options: [
        "Karl Marx",
        "Friedrich Engels",
        "Vladimir Lenin",
        "Joseph Stalin",
      ],
      correctAnswers: ["Karl Marx", "Friedrich Engels"],
    },
    {
      question: "Which ancient civilization built the pyramids in Egypt?",
      options: ["Greek", "Roman", "Mayan", "Egyptian"],
      correctAnswers: ["Egyptian"],
    },
    {
      question: "What was the main cause of the American Civil War?",
      options: [
        "Slavery",
        "Economic disparities",
        "States' rights",
        "Religious differences",
      ],
      correctAnswers: ["Slavery"],
    },
    {
      question: "Who was the leader of Nazi Germany during World War II?",
      options: [
        "Adolf Hitler",
        "Joseph Stalin",
        "Benito Mussolini",
        "Hirohito",
      ],
      correctAnswers: ["Adolf Hitler"],
    },
    {
      question: "When did the Renaissance period begin?",
      options: ["12th century", "14th century", "16th century", "18th century"],
      correctAnswers: ["14th century"],
    },
    {
      question: "Which city was the capital of the Byzantine Empire?",
      options: ["Rome", "Constantinople", "Athens", "Paris"],
      correctAnswers: ["Constantinople"],
    },
    {
      question:
        "Who was the first female Prime Minister of the United Kingdom?",
      options: [
        "Margaret Thatcher",
        "Angela Merkel",
        "Theresa May",
        "Indira Gandhi",
      ],
      correctAnswers: ["Margaret Thatcher"],
    },
  ],
  chemistry: [
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Cu", "Fe"],
      correctAnswers: ["Au"],
    },
    {
      question: "How many elements are there in the periodic table?",
      options: ["92", "108", "118", "134"],
      correctAnswers: ["118"],
    },
    {
      question: "What is the pH of pure water?",
      options: ["5", "7", "9", "14"],
      correctAnswers: ["7"],
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswers: ["Nitrogen"],
    },
    {
      question: "What is the chemical formula for water?",
      options: ["CO2", "H2O", "O2", "NaCl"],
      correctAnswers: ["H2O"],
    },
    {
      question:
        "What is the process of converting a solid directly to a gas called?",
      options: ["Sublimation", "Condensation", "Evaporation", "Melting"],
      correctAnswers: ["Sublimation"],
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["4", "6", "8", "12"],
      correctAnswers: ["6"],
    },
    {
      question: "Which element is the lightest?",
      options: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
      correctAnswers: ["Hydrogen"],
    },
    {
      question: "What is the chemical symbol for oxygen?",
      options: ["O", "O2", "O3", "O4"],
      correctAnswers: ["O"],
    },
    {
      question:
        "What is the process of combining two or more substances to form a new substance?",
      options: ["Decomposition", "Combustion", "Synthesis", "Precipitation"],
      correctAnswers: ["Synthesis"],
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  const topicSelectionContainer = document.getElementById("topicSelection");
  const startQuizButton = document.getElementById("startQuiz");
  const quizContainer = document.getElementById("quiz");
  const resultContainer = document.getElementById("result");
  const submitButton = document.getElementById("submit");
  const retryButton = document.getElementById("retry");
  const showAnswerButton = document.getElementById("showAnswer");
  const goBackButton = document.getElementById("goBack"); 
  const topicsDropdown = document.getElementById("topics");


  let currentQuestionIndex = 0;
  let userAnswers = [];
  let selectedTopic = "";

  startQuizButton.addEventListener("click", function () {
    selectedTopic = topicsDropdown.value;
    shuffleQuestions(selectedTopic);
    renderQuestion();
    topicSelectionContainer.classList.add("hide");
    submitButton.classList.remove("hide");
  });

  function shuffleQuestions(topic) {
    quizData[topic] = shuffleArray(quizData[topic]);
  }

  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  function renderQuestion() {
    const currentQuestion = quizData[selectedTopic][currentQuestionIndex];

    if (currentQuestion) {
      quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="options">
          ${currentQuestion.options
            .map(
              (option, index) =>
                `<label class="option"><input type="checkbox" value="${option}" /> ${option}</label>`
            )
            .join("")}
        </div>`;
    } else {
      showResult();
    }
  }

  function submitAnswers() {
    const currentQuestion = quizData[selectedTopic][currentQuestionIndex];
    const selectedOptions = Array.from(
      document.querySelectorAll(".options input:checked")
    ).map((input) => input.value);

    const isCorrect = arraysEqual(
      selectedOptions,
      currentQuestion.correctAnswers
    );

    userAnswers.push({
      question: currentQuestion.question,
      selectedOptions,
      isCorrect,
    });

    currentQuestionIndex++;
    renderQuestion();
  }

  function showResult() {
    submitButton.classList.add("hide");
    retryButton.classList.remove("hide");
    showAnswerButton.classList.remove("hide");
    goBackButton.classList.remove("hide");
    const score = userAnswers.filter((answer) => answer.isCorrect).length;
    resultContainer.innerHTML = `Your Score: ${score} / ${quizData[selectedTopic].length}`;
  }

  submitButton.addEventListener("click", submitAnswers);

  retryButton.addEventListener("click", function () {
    currentQuestionIndex = 0;
    userAnswers = [];
    submitButton.classList.remove("hide");
    retryButton.classList.add("hide");
    showAnswerButton.classList.add("hide");
    resultContainer.innerHTML = "";
    renderQuestion();
  });

  showAnswerButton.addEventListener("click", function () {
    const questionHTMLArray = [];
  
    userAnswers.forEach((userAnswer, index) => {
      const currentQuestion = quizData[selectedTopic][index];

      const optionsHTML = currentQuestion.options
        .map(
          (option) =>
            `<label class="option">
              <input type="checkbox" disabled ${
                userAnswer.selectedOptions.includes(option) ? "checked" : ""
              } ${
                currentQuestion.correctAnswers.includes(option)
                  ? "data-correct"
                  : ""
              } />
              ${option}
            </label>`
        )
        .join("");
  
      const questionHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="options">${optionsHTML}</div>`;
  
      questionHTMLArray.push(questionHTML);
    });
  
    const modalContent = document.createElement("div");
    modalContent.innerHTML = questionHTMLArray.join("\n");
    showModal(modalContent);
  });
  
  function showModal(content) {
    const modalOverlay = document.createElement("div");
    modalOverlay.classList.add("modal-overlay");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.appendChild(content);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
  
    modalOverlay.addEventListener("click", function () {
      document.body.removeChild(modalOverlay);
    });
  }
    goBackButton.addEventListener("click", function () {
      resetQuiz();
      topicSelectionContainer.classList.remove("hide");
    });
  
    function resetQuiz() {
      currentQuestionIndex = 0;
      userAnswers = [];
      submitButton.classList.remove("hide");
      retryButton.classList.add("hide");
      showAnswerButton.classList.add("hide");
      goBackButton.classList.add("hide");
      resultContainer.innerHTML = "";
    }

  function arraysEqual(arr1, arr2) {
    return (
      arr1.length === arr2.length &&
      arr1.every((value, index) => value === arr2[index])
    );
  }
});
