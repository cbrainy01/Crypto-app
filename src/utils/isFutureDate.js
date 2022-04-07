export default function isFutureDate(compareVal) {
    const today = new Date
    const todayString = today.toISOString().split("T")[0].replace(/-/g,"");
    const todayInt = parseInt(todayString, 10);

    const formattedcompareVal = compareVal.replace(/-/g,"");
    const compareValInt = parseInt(formattedcompareVal, 10)
    const diff = todayInt - compareValInt
    
    if(diff < 0) { return true }
    else { return false };
}