export default function isoToStandardTime(isoTime) {
  const date = isoTime.split("T")[0];
  const time = isoTime.split("T")[1];
  const militaryTime = time.slice(0, 8);

  const militaryTimeArray = militaryTime.split(":");

  const hours = Number(militaryTimeArray[0]);
  const minutes = Number(militaryTimeArray[1]);
  const seconds = Number(militaryTimeArray[2]);

  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours == 0) {
    timeValue = "12";
  }

  timeValue += minutes < 10 ? ":0" + minutes : ":" + minutes;
  timeValue += seconds < 10 ? ":0" + seconds : ":" + seconds;
  timeValue += hours >= 12 ? " P.M." : " A.M.";
  const standardTime = `${date}, ${timeValue}`;
  return standardTime;
}
