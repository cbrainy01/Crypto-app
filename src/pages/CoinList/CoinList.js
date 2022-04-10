import React, { useState } from "react";
import { BitcoinOverview, Timespan, Coins } from "components";

export default function CoinList() {
  return (
    <div>
      <BitcoinOverview />
      <Timespan />
      <Coins />
    </div>
  );
}
