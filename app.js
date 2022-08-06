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
          "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
        alt: "Photo of the Empire State building during daytime",
        credit: "Oliver Niblett",
      },
      {
        text: "Austin",
        image:
          "https://images.unsplash.com/photo-1473042904451-00171c69419d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=899&q=80",
        alt: "Time-lapse photography car light on bridge",
        credit: "Carlos Alfonso",
      },
      {
        text: "Portland",
        image:
          "https://images.unsplash.com/photo-1472510771109-39b92752a6b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "High-rise buildings",
        credit: "Elena Kuchko ",
      },
      {
        text: "New Orleans",
        image:
          "https://images.unsplash.com/photo-1558390640-383986a7cd2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
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
          "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80",
        alt: "Pepperoni Pizza",
        credit: "Alan Hardman",
      },
      {
        text: "Sandwich",
        image:
          "https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Ham sandwich on white surface",
        credit: "Eaters Collective",
      },
      {
        text: "Pasta",
        image:
          "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "Pasta in tomato sauce",
        credit: "Mgg Vitchakorn",
      },
      {
        text: "Hamburger",
        image:
          "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
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
          "https://images.unsplash.com/photo-1627553524956-311288fed658?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
        alt: "focus photography of building windows",
        credit: "Burgess Milner",
      },
      {
        text: "Modern",
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "low angle view of building",
        credit: "Brandon Giggs",
      },
      {
        text: "House",
        image:
          "https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        alt: "trees beside white house",
        credit: "Phil Hearing",
      },
      {
        text: "Mountains",
        image:
          "https://images.unsplash.com/photo-1485160497022-3e09382fb310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        alt: "brown wooden cabin in front of forest",
        credit: "eulauretta",
      },
    ],
  },
];
