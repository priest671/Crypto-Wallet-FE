import { IonButtons, IonMenuButton, IonMenuToggle } from "@ionic/react";
import React from "react";
import styles from "./Header.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  let backButton;
  if (props.title !== "Login" && props.title !== "Register") {
    backButton = (
      <IonButtons>
        <IonMenuToggle>
          <IonMenuButton />
        </IonMenuToggle>
      </IonButtons>
    );
  } else {
    backButton = (
      <div className={styles["backButton"]}>
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>
      </div>
    );
  }

  return (
    <div className={styles["container"]}>
      {backButton}
      <div className={styles["heading"]}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Header;
