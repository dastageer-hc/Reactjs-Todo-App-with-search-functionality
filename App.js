import "./styles.css";
import cardData from "./cardata";
import { useState } from "react";
function App() {
  const [cards, setCards] = useState(cardData);

  const onChangeHandler = (e) => {
    if (e.target.value === "") setCards(cardData);
    else {
      const filteredCard = cardData.filter((el) => {
        if (el.title.includes(e.target.value)) return el;
      });
      setCards(filteredCard);
    }
  };
  return (
    <>
      <form>
        <label>search for task</label>
        <input onChange={onChangeHandler} type="search"></input>
      </form>
      <div>
        {cards.map((card) => {
          return (
            <div className="card">
              <h3>{card.title}</h3>
              <p>{card.discription}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
