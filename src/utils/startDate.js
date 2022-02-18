export default function startDate() {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate() - 1
    const mth =
            month + 1 < 10 && month >= 0
            ? `0${month + 1}`
            : `${month + 1}`;
    const dy = day < 10 && day >= 1 ? `0${day}` : day;
    return `${mth}-${dy}-${year}`;
}