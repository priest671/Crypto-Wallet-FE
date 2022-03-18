import React, { Fragment } from "react";
import { IonMenu, IonContent } from "@ionic/react";

import styles from "./Menu.module.css";
import profile from "./avatar.png";
import Anchor from "../Anchor/Anchor";

//Icons
import { SiBitcoincash } from "react-icons/si";
import { IoIosWallet } from "react-icons/io";
import { AiOutlineTransaction, AiTwotoneSetting } from "react-icons/ai";
import { GiTrade, GiBuyCard } from "react-icons/gi";

const Menu: React.FC = () => {
  const [disabled, setDisabled] = React.useState(false);
  let name = "Hiba Razzaq";
  let balance = "130000";

  return (
    <Fragment>
      <IonMenu side="start" menuId="first" contentId="main" disabled={disabled}>
        <IonContent>
          <div className={styles["header"]}>
            <div className={styles["pic"]}>
              <img src={profile} alt="" />
            </div>
            <div className={styles["info"]}>
              <h3>{name}</h3>
              <div>
                <Fragment>
                  {" "}
                  <SiBitcoincash />
                  <p>PKR: {balance}</p>{" "}
                </Fragment>
              </div>
            </div>
          </div>

          <div className={styles["content"]}>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 50);
              }}
              className={styles["item"]}
            >
              <Anchor path="/wallet">My Wallet</Anchor>
              <IoIosWallet />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 50);
              }}
              className={styles["item"]}
            >
              <Anchor path="/transactions">My Transactions</Anchor>
              <AiOutlineTransaction />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 50);
              }}
              className={styles["item"]}
            >
              <Anchor
                onClick={() => {
                  setDisabled(true);
                  setTimeout(() => setDisabled(false), 50);
                }}
                path="/marketplace"
              >
                Marketplace
              </Anchor>
              <GiTrade />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 50);
              }}
              className={styles["item"]}
            >
              <Anchor path="/trades">Buy and Sell Crypto</Anchor>
              <GiBuyCard />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 50);
              }}
              className={styles["item"]}
            >
              <Anchor path="/usersetting">Setting</Anchor>
              <AiTwotoneSetting />
            </div>
          </div>

          <div className={styles["footer"]}>
            <Anchor path="/register">
              <div className={styles["Button"]}>
                <p>Logout</p>
              </div>
            </Anchor>
          </div>
        </IonContent>
      </IonMenu>
    </Fragment>
  );
};

export default Menu;
