import { IonButtons, IonMenuButton, IonMenuToggle } from "@ionic/react";
import React from "react";
import styles from "./Header.module.css";

interface Props {
  title: string;
}

const Header: React.FC<Props> = (props) => {
  return (
    <div className={styles["container"]}>
      <IonButtons>
        <IonMenuToggle>
          <IonMenuButton />
        </IonMenuToggle>
      </IonButtons>
      <div className={styles["heading"]}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Header;
