import numeral from "numeral";

export default function formatNumber(n) {
    const num = numeral(n).format("0.00a");
    const lastChar = num[num.length - 1]
    const parsedNum = parseInt(lastChar, 10)
    if(isNaN(parsedNum)) { return num.slice(0, -1) + lastChar.toUpperCase() }
    return num
}

