// Ionic Imports
import { IonButtons, IonMenuButton, IonMenuToggle } from "@ionic/react";

// React Imports
import React from "react";

// Styles / Icons Imports
import styles from "./Header.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

interface Props {
  title: string;
}

const backOptions = [
  "Bitcoin",
  "Ethereum",
  "Dogecoin",
  "Cardano",
  "Solana",
  "Litecoin",
  "Login",
  "Register",
];

const Header: React.FC<Props> = (props) => {
  let backButton;
  if (backOptions.includes(props.title)) {
    backButton = (
      <div className={styles["backButton"]}>
        <Link to="/">
          <IoMdArrowRoundBack />
        </Link>
      </div>
    );
  } else {
    backButton = (
      <IonButtons>
        <IonMenuToggle hidden={false} autoHide={false}>
          <IonMenuButton hidden={false} autoHide={false} />
        </IonMenuToggle>
      </IonButtons>
    );
  }

  return (
    <div className={styles["container"]}>
      {backButton}
      <p>{props.title}</p>
    </div>
  );
};

export default Header;
