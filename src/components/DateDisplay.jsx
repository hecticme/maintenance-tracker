import { useEffect, useState } from "react";

export const DateDisplay = ({ lastDate, spanDate, spanDateFormat }) => {
  const [timeEstimate, setTimeEstimate] = useState("");
  const [timeLeft, setTimeLeft] = useState({ number: "", format: "" });

  function getNextDate() {
    // Convert spanDate to milliseconds
    let timeDif;
    if (spanDateFormat === "day") {
      timeDif = spanDate * 24 * 3600 * 1000;
    } else if (spanDateFormat === "week") {
      timeDif = spanDate * 7 * 24 * 3600 * 1000;
    } else if (spanDateFormat === "month") {
      timeDif = spanDate * 30 * 24 * 3600 * 1000;
    } else if (spanDateFormat === "year") {
      timeDif = spanDate * 365 * 24 * 3600 * 1000;
    }
    // Return next maintenance date
    const nextDate = new Date(lastDate).getTime() + timeDif;
    let nextDay = new Date(nextDate).getDate();
    if (nextDay < 10) {
      nextDay = `0${nextDay}`;
    }
    let nextMonth = new Date(nextDate).getMonth() + 1;
    if (nextMonth < 10) {
      nextMonth = `0${nextMonth}`;
    }
    let nextYear = new Date(nextDate).getFullYear();
    const nextDateString = `${nextYear}-${nextMonth}-${nextDay}`;
    // Set estimate time
    setTimeEstimate(nextDateString);
    // Calculate time left
    const currentTime = Date.now();
    const timeLeftMS = nextDate - currentTime;
    // Set time left format
    let timeLeftNumber;
    let timeLeftFormat;
    if (timeLeftMS > 1000 * 3600 * 24 * 365) {
      // If time left in year format
      timeLeftNumber = Math.floor(timeLeftMS / (1000 * 3600 * 24 * 365));
      if (timeLeftNumber >= 2) {
        timeLeftFormat = "years";
      } else {
        timeLeftFormat = "year";
      }
    } else if (
      timeLeftMS > 1000 * 3600 * 24 * 30 &&
      timeLeftMS < 1000 * 3600 * 24 * 365
    ) {
      // If time left in month format
      timeLeftNumber = Math.floor(timeLeftMS / (1000 * 3600 * 24 * 30));
      if (timeLeftNumber >= 2) {
        timeLeftFormat = "months";
      } else {
        timeLeftFormat = "month";
      }
    } else if (
      timeLeftMS > 1000 * 3600 * 24 * 7 &&
      timeLeftMS < 1000 * 3600 * 24 * 30
    ) {
      // If time left in week format
      timeLeftNumber = Math.floor(timeLeftMS / (1000 * 3600 * 24 * 7));
      if (timeLeftNumber >= 2) {
        timeLeftFormat = "weeks";
      } else {
        timeLeftFormat = "week";
      }
    } else {
      // If time left in day format
      timeLeftNumber = Math.floor(timeLeftMS / (1000 * 3600 * 24));
      if (timeLeftNumber >= 2) {
        timeLeftFormat = "days";
      } else {
        timeLeftFormat = "day";
      }
    }
    // Set timeLeft state
    if (timeLeftNumber <= 0) {
      setTimeLeft({
        number: "Need",
        format: "Maintenance",
      });
    } else {
      setTimeLeft({
        number: timeLeftNumber,
        format: `${timeLeftFormat} left`,
      });
    }
  }

  useEffect(() => {
    getNextDate();
  }, []);

  return (
    <div className="card__time">
      <p className="card__time__last">{lastDate}</p>
      <div className="card__time__span">
        <div className="card__time__span__dot"></div>
        <p className="card__time__span__text">{`${timeLeft.number} ${timeLeft.format}`}</p>
      </div>
      <p className="card__time__estimate">{timeEstimate}</p>
    </div>
  );
};
