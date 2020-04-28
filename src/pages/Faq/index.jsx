import React from "react";
import "./styles.css";

const questions = [
  "Do I need account to be able to use Book Swap",
  "How to create account",
  "How can I post a trade",
  "What is the most relevant information of a book",
];

const answers = [
  "No, you don't. You can still search for the book you want. \n Account is used to be able to trade and post books on the website.",
  "To create an account you just need to press 'SIGN UP' tab at the bottom right of your screen and fill the information required.",
  "When logged in, there will be a 'Trade Book' button at the top right of the website. \n Once clicked you will be redirected to the page where you fill the fields with the information.",
  "The most relevant information to write about a book are: \n \b \b 1. Book Description \n \b \b 2. Book Condition \n \b \b 3. Trade options (Max distance you can go and delivery costs, for example) \n \b \b 4. What Books / Genres do you accept",
];

export default function Faq() {
  return (
    <main>
      <h1 className="faqTitle">Frequent Answer and Questions</h1>
      <div className="question__list">
        {questions.map((value, index) => {
          const answerNo = index;
          return (
            <div>
              <h3 className="question" value={value} key={index}>
                Q: {value}
              </h3>
              <p className="answer"> {answers[answerNo]} </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
