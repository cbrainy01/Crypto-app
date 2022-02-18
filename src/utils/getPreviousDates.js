
function leapYearCheck(year) {
  const bool = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
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
    const daysRemaining = 30 - (currentDayOfMonth + 1); 
    const startPoint = daysInPrevMonth - daysRemaining;
    const dayToEndOfPrev = range(startPoint, daysInPrevMonth);

    function datify(arr, currMonth, prevMonth) {
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
    return labelDataDates
}

function prev30Days(dt) {
    // dt format = "01-17-2022";
    const year = parseInt(dt.slice(-4), 10);
    const month = parseInt(dt.slice(0, 2), 10) - 1;
  
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
    const currentDayOfMonth = parseInt(dt.slice(-7, -5), 10);
  
    function range(start, end) {
        if(start > end) { return [] }
        return new Array(end + 1 - start).fill().map((d, i) => i + start);
    }
  
    const dayToBeginningOfMonth = range(1, currentDayOfMonth);
    const daysRemaining = 30 - (currentDayOfMonth + 1); //since months dont include day 0
    const startPoint = daysInPrevMonth - daysRemaining;
    const dayToEndOfPrev = range(startPoint, daysInPrevMonth);
  
    function datify(arr, currMonth, prevMonth) {
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
    const labelDataDates = [...dToEWithDates, ...dToBWithDates];
    return { newDate: labelDataDates[0], arrOfDates: labelDataDates };
  }

export default function getPreviousDates(start, months) {
    let store = [];
    let startDate = start;
    if(months === "1week") {
        const { newDate, arrOfDates } = prev30Days(startDate);
        return arrOfDates.slice(-7); 
    }
    else {
        while (months > 0) {
            const { newDate, arrOfDates } = prev30Days(startDate);
            store = [...arrOfDates, ...store];
            startDate = newDate;
            months--;
        }
        return store;
    }
    
    
    
  }