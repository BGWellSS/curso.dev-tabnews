import React, { useState } from "react";
import styles from "./index.module.css";

function Home() {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const handleImageClick = () => {
    setHasBeenClicked(true);
  };
  const MyIntro = () => {
    return (
      <div className={styles.message_image_container}>
        <img
          src="https://iili.io/JK7sH8P.md.png"
          alt="JK7sH8P.md.png"
          border="0"
          className={styles.message_image}
          onClick={handleImageClick}
        />
        <h2 className={styles.message_image_label} onClick={handleImageClick}>
          Clique em mim!
        </h2>
      </div>
    );
  };
  const MyMessage = () => {
    return <h1 className={styles.message_text}>❤️ Eu te amo muito! ❤️</h1>;
  };

  return (
    <section className={styles.message_container}>
      {hasBeenClicked ? <MyMessage /> : <MyIntro />}
    </section>
  );
}

export default Home;
