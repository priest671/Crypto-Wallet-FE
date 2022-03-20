import React, { Fragment } from "react";
import Anchor from "../../components/UI/Anchor/Anchor";
import Button from "../../components/UI/Button/Button";
import styles from "./Home.module.css";

const Home = () => {
  console.log(".....AT HOME PAGE.....");
  return (
    <Fragment>
      <div className={styles["wrapper"]}>
        <div className={styles["topBox"]}>
          <div className={styles["heading"]}>
            <div className={styles["name"]}>
              Pak Wallet
              <span> !</span>
            </div>
          </div>
          <p>
            Buy and Sell cryptocurrency with ease.
            <br />
            Check out our marketplace to buy and sell crypto.
          </p>
          <p>Register now to get your very own wallet.</p>
        </div>
        <div></div>
        <div className={styles["bottomBox"]}>
          <Anchor path="/login">
            <Button className="primary">
              <p>Login</p>
            </Button>
          </Anchor>

          <Anchor path="/register">
            <Button className="primary-invert">
              <p>Register</p>
            </Button>
          </Anchor>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
