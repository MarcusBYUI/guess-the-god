import React from "react";
import Container from "../../components/container/container";
import styles from "./resultpage.module.css";

const Resultpage = (props) => {
  const html =
    "<p><span>industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </span></p><p><span>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</span></p><p><span><span>&nbsp; &nbsp; industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</span></span></p><p><span>&nbsp; &nbsp; industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with deskto</span></p><p>&nbsp;</p>";
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
      <div className={styles.resultInfo}>
        <h1>Lord Ganesha</h1>

        {props.win ? (
          <p className={styles.result}>
            {" "}
            Congratulations, <br /> you will be entered into the monthly drawing{" "}
          </p>
        ) : (
          <p className={styles.result}>
            {" "}
            So sorry!, <br /> try againi next month{" "}
          </p>
        )}

        <p dangerouslySetInnerHTML={{ __html: html }}></p>
      </div>
    </Container>
  );
};

export default Resultpage;
