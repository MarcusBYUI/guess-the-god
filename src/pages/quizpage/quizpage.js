import React from "react";
import styles from "./quizpage.module.css";
import Container from "../../components/container/container";

const Quizpage = () => {
  const handleFormSubmission = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <img
        className={styles.quizbanner}
        src={require("../../data/placeholder.png")}
        alt="banner"
      />
      <Container>
        <div className={styles.header}>
          <p>I'd like to insert a clue here</p>
          <h1>Guess The God</h1>
          <p>I'd like to insert a clue here</p>
        </div>
        <div className={styles.entrygrid}>
          <p>I'd like to insert a clue here</p>
          <form onSubmit={handleFormSubmission} className={styles.form}>
            <input type="text" placeholder="Enter guess here" required />
            <input type="submit" value="Submit" />
          </form>
          <p>I'd like to insert a clue here</p>
        </div>
        <div className={styles.thirdclues}>
          <p>I'd like to insert a clue here</p>
          <p>I'd like to insert a clue here</p>
          <p>I'd like to insert a clue here</p>
        </div>
        <div className={styles.bottomclues}>
          <p>I'd like to insert a clue here</p>
          <p>I'd like to insert a clue here</p>
        </div>
      </Container>
    </div>
  );
};

export default Quizpage;
