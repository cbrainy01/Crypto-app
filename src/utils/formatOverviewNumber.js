import numeral from "numeral";

export default function formatOverviewNumber(n) {
    const num = numeral(n).format("0.00a");
    const lastChar = num[num.length - 1]
    const parsedNum = parseInt(lastChar, 10)
    if(isNaN(parsedNum)) {
        switch (lastChar) {
          case "k":
            return `${num.slice(0, -1)} thsn`
          case "m":
            return `${num.slice(0, -1)} mln`
          case "b":
            return `${num.slice(0, -1)} bln`
          case "t":
            return `${num.slice(0, -1)} tln`
          default:
            return num
        }
    }
    else { return num.toString().slice(0, -3) }
  }
  