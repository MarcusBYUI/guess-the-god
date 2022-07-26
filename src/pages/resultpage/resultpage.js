import React from "react";
import Container from "../../components/container/container";
import styles from "./resultpage.module.css";

const Resultpage = (props) => {
  return (
    <Container>
      <div className={styles.grid}>
        <div>
          <p>
            I'll like a display tect here, it would require an entry in the back
          </p>
          <p>
            I'll like a display tect here, it would require an entry in the back
          </p>
        </div>
        <img src={require("../../data/placeholder.png")} alt="banner" />
        <div>
          <p>
            I'll like a display tect here, it would require an entry in the back
          </p>
          <p>
            I'll like a display tect here, it would require an entry in the back
          </p>
        </div>
      </div>
      <h1>Lord Ganesha</h1>
      <p>
        {props.win
          ? "Congratulations, <br/> you will be entered into the monthly drawing"
          : `So sorry!, <br> try againi next month`}
      </p>
    </Container>
  );
};

export default Resultpage;
