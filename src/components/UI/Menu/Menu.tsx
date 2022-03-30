import React, { Fragment } from "react";
import { IonMenu, IonContent } from "@ionic/react";

import { useAppDispatch } from "../../../store/hooks";
import styles from "./Menu.module.css";
import Anchor from "../Anchor/Anchor";

//Icons
import { SiBitcoincash } from "react-icons/si";
import { IoIosWallet } from "react-icons/io";
import { AiOutlineTransaction, AiTwotoneSetting } from "react-icons/ai";
import { GiTrade, GiBuyCard } from "react-icons/gi";
import { BiTransfer } from "react-icons/bi";
import Button from "../Button/Button";
import { logout } from "../../../store/Authentication/authenticationActions";
import { useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const [disabled, setDisabled] = React.useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let name = "Hiba Razzaq";
  let balance = "130000";

  const logoutHandler = () => {
    setDisabled(true);
    setTimeout(() => setDisabled(false), 100);
    dispatch(logout());
    navigate("/");
  };

  return (
    <Fragment>
      <IonMenu side="start" menuId="first" contentId="main" disabled={disabled}>
        <IonContent>
          <div className={styles["header"]}>
            <div className={styles["pic"]}>
              <img src="images/HibaAvatar.png" alt="" />
            </div>
            <div className={styles["info"]}>
              <h3>{name}</h3>
              <div>
                <Fragment>
                  {" "}
                  <p>PKR: {balance}</p> <SiBitcoincash />
                </Fragment>
              </div>
            </div>
          </div>

          <div className={styles["content"]}>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor path="/">My Wallet</Anchor>
              <IoIosWallet />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor path="/transactions">My Transactions</Anchor>
              <AiOutlineTransaction />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor
                onClick={() => {
                  setDisabled(true);
                  setTimeout(() => setDisabled(false), 100);
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
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor path="/trades">Buy and Sell Crypto</Anchor>
              <GiBuyCard />
            </div>
            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor path="/transfer">Transfer Crypto</Anchor>
              <BiTransfer />
            </div>

            <div
              onClick={() => {
                setDisabled(true);
                setTimeout(() => setDisabled(false), 100);
              }}
              className={styles["item"]}
            >
              <Anchor path="/usersetting">Settings</Anchor>
              <AiTwotoneSetting />
            </div>
          </div>

          <div className={styles["footer"]}>
            <div className={styles["footerContainer"]}>
              <Button className="delete" onClick={logoutHandler}>
                <p>Logout</p>
              </Button>
            </div>
          </div>
        </IonContent>
      </IonMenu>
    </Fragment>
  );
};

export default Menu;
