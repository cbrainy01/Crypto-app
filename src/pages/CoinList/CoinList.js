import React, { useState } from "react";
import { BitcoinOverview, Timespan, Coins } from "components";

export default function CoinList(props) {
  const [timeSpan, setTimeSpan] = useState("1");

  const handleTimespanChange = (newTimespan) => {
    setTimeSpan(newTimespan);
  };

  return (
    <div>
      <BitcoinOverview timeSpan={timeSpan} currency={props.currency} />
      <Timespan handleTimespanChange={handleTimespanChange} />
      <Coins {...props} />
    </div>
  );
}
