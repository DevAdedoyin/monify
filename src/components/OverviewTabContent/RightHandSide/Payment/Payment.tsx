import { Switch } from "@material-ui/core";
import React from "react";

type Props = {};

const Payment = (props: Props) => {
  return (
    <div>
      <div>
        <p>Enter Amount</p>
      </div>
      <div>
        <h3>£4,589.12</h3>
      </div>

      <div>
        <div>
          <p>Pay With</p>
        </div>
        <div>
          <div>
            <Switch
              size="small"
              defaultChecked
              style={{
                accentColor: "pink",
                color: "pink",
                backgroundColor: "transparent",
              }}
            />
            <p>Card 5894 **** **** ****</p>
          </div>
          <div>
            <p>Withdraw Money</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
