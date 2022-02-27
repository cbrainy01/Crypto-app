import numeral from "numeral";
import Uptick from "../icons/Uptick.svg"
import Downtick from "../icons/Downtick.svg"

export default function renderPercentChange(n) {
  const num = numeral(n).format("0.00");
  if (num >= 0) {
    return (
      <div style={{ color: "green" }}>
        <img src={Uptick} alt="uptick" /> {Math.abs(num)}%
      </div>
    );
  } else {
    return (
      <div style={{ color: "red" }}>
        <img src={Downtick} alt="downtick" /> {Math.abs(num)}%
      </div>
    );
  }
}
