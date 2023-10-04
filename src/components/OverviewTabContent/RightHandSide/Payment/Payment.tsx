import { Switch } from "@material-ui/core";
import React, { useState } from "react";
import PaymentStyle from "./Payment.module.css";
import { FaAngleDown } from "react-icons/fa";
import ReactSwitch from "react-switch";

type Props = {};

const Payment = (props: Props) => {
  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <div className={PaymentStyle.paymentContainer}>
      <div className={PaymentStyle.enterAmountContainer}>
        <p className={PaymentStyle.enterAmount}>Enter Amount</p>
      </div>
      <div className={PaymentStyle.amountContainer}>
        <h2 className={PaymentStyle.amountEnterdTxt}>£4,589.12</h2>
      </div>
      <div className={PaymentStyle.creditCardContainer}>
        <div className={PaymentStyle.payWithContainer}>
          <p className={PaymentStyle.payWithTxt}>Pay With</p>
        </div>
        <div className={PaymentStyle.paymentOptionContainer}>
          <div className={PaymentStyle.switchCardContainer}>
            <ReactSwitch
              onChange={handleChange}
              checked={checked}
              className={PaymentStyle.reactSwitch}
              height={15}
              width={30}
              onColor="#AA336A"
              onHandleColor="#FFF"
              handleDiameter={15}
              uncheckedIcon={false}
              checkedIcon={false}
            />
            <p className={PaymentStyle.cardDetailsTxt}>
              Card 5894 **** **** ****
            </p>
          </div>
          <FaAngleDown
            style={{
              width: "0.5rem",
              height: "0.5rem",
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          />
        </div>
      </div>
      <div className={PaymentStyle.withdrawContainer}>
        <p className={PaymentStyle.withdrawTxt}>Withdraw Money</p>
      </div>
    </div>
  );
};

export default Payment;
