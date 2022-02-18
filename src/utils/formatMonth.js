export default function formatMonth(currentMonth) {
    let month = currentMonth < 0 ? 11 : currentMonth;
    if(month + 1 < 10 && month >= 0) { return `0${month + 1}` }
    else { return `${month + 1}` };
}