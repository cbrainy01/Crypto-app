import { format } from "date-fns";
import { prev30Days } from "./getPreviousDates";

function getHours(datesArray, initialHour, initialMeridian, span) {
  let meridian = initialMeridian;
  let hour = initialHour;
  const store = [];
  let day = datesArray.length - 1;
  for (let i = 0; i < span; i++) {
    const dateNTime = `${hour} ${meridian}, ${datesArray[day]}`;
    store.push(dateNTime);
    if (hour == 1 && meridian === "PM") {
      hour = 12;
      meridian = "AM";
    } else if (hour == 1 && meridian === "AM") {
      hour = 12;
      meridian = "PM";
      day = day - 1;
    } else {
      hour = hour - 1;
    }
  }
  return store;
}
export default function getPreviousHours(span) {
  const date = new Date();
  const dateWithTime = date.toLocaleString();
  const hour = parseInt(dateWithTime.split(", ")[1][0], 10);
  const meridian = dateWithTime.split(", ")[1].slice(-2);
  const dateString = format(date, "MM-dd-yyyy");
  const prev8 = prev30Days(dateString).arrOfDates.slice(-8);

  return getHours(prev8, hour, meridian, span);
}
