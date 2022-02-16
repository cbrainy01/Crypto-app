
function leapYearCheck(year) {
  const bool = (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
  return bool ? 29 : 28;
}

export function previous30Days() {
        
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const months = {
    "0": 31,
    "1": leapYearCheck(year),
    "2": 31,
    "3": 30,
    "4": 31,
    "5": 30,
    "6": 31,
    "7": 31,
    "8": 30,
    "9": 31,
    "10": 30,
    "11": 31
    };

    
    const daysInPrevMonth = months[month - 1] || 31; //edge case for january
    const currentDayOfMonth = d.getDate() - 1;
    
    function range(start, end) {
        return new Array(end + 1 - start).fill().map((d, i) => i + start);
    }

    const dayToBeginningOfMonth = range(1, currentDayOfMonth);
    const daysRemaining = 30 - (currentDayOfMonth + 1); //since months dont include day 0
    const startPoint = daysInPrevMonth - daysRemaining;
    const dayToEndOfPrev = range(startPoint, daysInPrevMonth);

    function datify(arr, currMonth, prevMonth) {
        // check if current month is jan
        // limits: arr nums cant go over 31
        // currMonth cant be less than -1
        // prevMonth cant be less than -2
        // how do I throw informative errors for the above?
        const currentMonth = currMonth < 0 ? 11 : currMonth;
        const mth =
            currentMonth + 1 < 10 && currentMonth >= 0
            ? `0${currentMonth + 1}`
            : `${currentMonth + 1}`;
        const yr = prevMonth <= -2 ? year - 1 : year;
        return arr.map((day) => {
            const dy = day < 10 && day >= 1 ? `0${day}` : day;
            return `${mth}-${dy}-${yr}`;
        });
    }

    const dToBWithDates = datify(dayToBeginningOfMonth, month, month - 1);
    const dToEWithDates = datify(dayToEndOfPrev, month - 1, month - 2);
    const labelDataDates = [...dToEWithDates, ...dToBWithDates]
    
    const labelData = [...dayToEndOfPrev, ...dayToBeginningOfMonth];
    return labelData
}