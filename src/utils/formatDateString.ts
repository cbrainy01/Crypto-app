export default function formatDateString(date: string) {
    // going from "yyyy-mm-dd to dd-mm-yyyy"
    const [year, month, day] = date.split("-")
    return `${day}-${month}-${year}`;
}