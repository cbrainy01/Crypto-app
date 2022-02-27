import formatMonth from "./formatMonth"

export default function startDate() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate() - 1
    const mth = formatMonth(month)
    const dy = day < 10 && day >= 1 ? `0${day}` : day;
    return `${mth}-${dy}-${year}`;
}