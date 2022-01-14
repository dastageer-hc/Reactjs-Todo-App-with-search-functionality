import shortid from "shortid";

const cardData = [
  { title: "Task - 1", discription: "Do dishes", cardId: shortid.generate() },
  { title: "Task - 2", discription: "Eat", cardId: shortid.generate() },
  { title: "Task - 3", discription: "Sleep", cardId: shortid.generate() }
];

export default cardData;
