import styles from "./Button.module.css";
import { IonButton } from "@ionic/react";

const Button = (props: any) => {
  return (
    <IonButton
      className={`${styles["button"]} ${styles[props.btnClass]} ${
        styles[props.size]
      } ${props.className}`}
      type={props.type || "submit"}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </IonButton>
  );
};

export default Button;
