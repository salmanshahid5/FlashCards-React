import { useState } from "react";

const questions = [
  {
    id: 1,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 2,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 4,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 5,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 6,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function Cards() {
  const [visibleId, setvisibleId] = useState(null);

  function handle(id) {
    setvisibleId(id !== visibleId ? id : null);
  }

  return (
    <div>
      <h1 className="heading">React Flashcard Quiz</h1> {/* Added heading here */}
      <div className="flashcards">
        {questions.map((q) => (
          <div
            key={q.id}
            onClick={() => handle(q.id)}
            className={q.id === visibleId ? "selected" : ""}
          >
            <p>{q.id === visibleId ? q.answer : q.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
