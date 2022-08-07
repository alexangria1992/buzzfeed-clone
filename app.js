const questionDisplay = document.querySelector("#questions");
const answerDisplay = document.querySelector("#answer");

const questions = [
  {
    id: 0,
    text: "Pick a vacation destination:",
    answers: [
      {
        text: "New York",
        image:
          "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjAxNA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Photo of the Empire State building during daytime",
        credit: "Oliver Niblett",
      },
      {
        text: "Austin",
        image:
          "https://images.unsplash.com/photo-1485445636332-cbe2d86716dd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjMyMw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Time-lapse photography car light on bridge",
        credit: "Carlos Alfonso",
      },
      {
        text: "Portland",
        image:
          "https://images.unsplash.com/photo-1645934430496-6cae81215bf9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjQ3MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "High-rise buildings",
        credit: "Elena Kuchko ",
      },
      {
        text: "New Orleans",
        image:
          "https://images.unsplash.com/photo-1544078042-81e5cc35e72a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjU2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Road with people and house",
        credit: "Joao Francisco ",
      },
    ],
  },
  {
    id: 1,
    text: "Pick some food:",
    answers: [
      {
        text: "Pizza",
        image:
          "https://images.unsplash.com/photo-1571066811602-716837d681de?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjcyMQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Pepperoni Pizza",
        credit: "Alan Hardman",
      },
      {
        text: "Sandwich",
        image:
          "https://images.unsplash.com/photo-1559054663-e8d23213f55c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjc3OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Ham sandwich on white surface",
        credit: "Eaters Collective",
      },
      {
        text: "Pasta",
        image:
          "https://images.unsplash.com/photo-1546549032-9571cd6b27df?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjg3Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Pasta in tomato sauce",
        credit: "Mgg Vitchakorn",
      },
      {
        text: "Hamburger",
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMjkwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "Hamburger",
        credit: "sk",
      },
    ],
  },
  {
    id: 2,
    text: "Pick a home:",
    answers: [
      {
        text: "traditional",
        image:
          "https://images.unsplash.com/photo-1648822502458-9cfddddb7a95?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMzE4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "focus photography of building windows",
        credit: "Burgess Milner",
      },
      {
        text: "Modern",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMzM1MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "low angle view of building",
        credit: "Brandon Giggs",
      },
      {
        text: "House",
        image:
          "https://images.unsplash.com/photo-1531663766899-27c5b930c76b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMzUwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "trees beside white house",
        credit: "Phil Hearing",
      },
      {
        text: "Mountains",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=200&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzMzM5MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
        alt: "brown wooden cabin in front of forest",
        credit: "eulauretta",
      },
    ],
  },
];

const answers = [
  {
    combination: ["New York", "Pizza", "Traditional"],
    text: "Blue Cheese",
    image:
      "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=230&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzNTc3OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    alt: "Blue Cheese",
  },
  {
    combination: ["Austin", "Pasta", "Modern"],
    text: "Cheddar",
    image:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=230&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzNjA5OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    alt: "Cheddar Cheese",
  },
  {
    combination: ["Portland", "Sandwich", "Mountains"],
    text: "Feta",
    image:
      "https://images.unsplash.com/photo-1559561853-08451507cbe7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=230&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzODgzOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    alt: "Feta Cheese",
  },

  {
    combination: ["New Orleans", "Hamburger", "House"],
    text: "Halloumi",
    image:
      "https://images.unsplash.com/photo-1578172397201-efaa902004a3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=230&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1OTgzODkwNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    alt: "Halloumi",
  },
];

//Need to have a default answer to compensate for lack of combination data

const unansweredQuestions = [];

const chosenAnswers = [];

const populateQuestions = () => {
  questions.forEach((question) => {
    //TITLE BLOCK
    const titleBlock = document.createElement("div");
    titleBlock.id = question.id;
    titleBlock.classList.add("title-block");

    const titleHeading = document.createElement("h2");
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);
    questionDisplay.append(titleBlock);

    //ANSWERS BLOCK
    const answersBlock = document.createElement("div");
    answersBlock.id = question.id + "-questions";
    answersBlock.classList.add("answer-options");

    unansweredQuestions.push(question.id);

    question.answers.forEach((answer) => {
      const answerBlock = document.createElement("div");
      answerBlock.classList.add("answer-block");
      answerBlock.addEventListener("click", () =>
        handleClick(question.id, answer.text)
      );

      //ANSWER IMAGE
      const answerImage = document.createElement("img");
      answerImage.setAttribute("src", answer.image);
      answerImage.setAttribute("alt", answer.alt);

      //ANSWER TITLE
      const answerTitle = document.createElement("h3");
      answerTitle.textContent = answer.text;

      const answerInfo = document.createElement("p");
      const imageLink = document.createElement("a");
      imageLink.setAttribute("href", answer.image);
      imageLink.textContent = answer.credit;
      const sourceLink = document.createElement("a");
      sourceLink.textContent = "Unsplash";
      sourceLink.setAttribute("src", " https://www.unsplash.com");
      answerInfo.append(imageLink, " to ", sourceLink);

      answerBlock.append(answerImage, answerTitle, answerInfo);
      answersBlock.append(answerBlock);
    });

    questionDisplay.append(answersBlock);
  });
};

populateQuestions();

const handleClick = (questionId, chosenAnswer) => {
  //   console.log(questionId, chosenAnswer);
  if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer);
  const itemToRemove = unansweredQuestions.indexOf(questionId);

  if (itemToRemove > -1) {
    unansweredQuestions.splice(itemToRemove, 1);
  }

  console.log(chosenAnswers);
  console.log(unansweredQuestions);

  disableQuestionBlock(questionId, chosenAnswer);
  const lowestQuestionId = Math.min(...unansweredQuestions);
  location.href = "#" + lowestQuestionId;

  //scroll to top most unanswered question
  if (!unansweredQuestions.length) {
    //Scroll to answer div
    location.href = "#answer";
    showAnswer();
  }
};

const showAnswer = () => {
  let result;
  answers.forEach((answer) => {
    if (
      chosenAnswers.includes(answer.combination[0]) +
      chosenAnswers.includes(answer.combination[1]) +
      chosenAnswers.includes(answer.combination[2])
    ) {
      result = answer;
    } else if (!result) {
      // first answer object is default
      result = answers[0];
    }
  });
  console.log(result);

  const answerBlock = document.createElement("div");
  answerBlock.classList.add("result-block");
  const answerTitle = document.createElement("h3");
  answerTitle.textContent = result.text;
  const answerImage = document.createElement("img");
  answerImage.setAttribute("src", result.image);
  answerImage.setAttribute("alt", result.alt);

  answerBlock.append(answerTitle, answerImage);

  answerDisplay.append(answerBlock);

  const allAnswerBlocks = document.querySelectorAll(".answer-block");
  Array.from(allAnswerBlocks).forEach((answerBlock) =>
    answerBlock.replaceWith(answerBlock.cloneNode(true))
  );
};

const disableQuestionBlock = (questionId, chosenAnswer) => {
  const currentQuestionBlock = document.getElementById(
    questionId + "-questions"
  );
  Array.from(currentQuestionBlock.children).forEach((block) => {
    if (block.children.item(1).innerText != chosenAnswer) {
      block.style.opacity = "50%";
    }
  });
};
