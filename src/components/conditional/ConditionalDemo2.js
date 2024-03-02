import React from "react";

export default function ConditionalDemo2() {
  let dayNumber = +prompt("Enter day number");
  let dayName = "";

  switch (dayNumber) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "thursday";
      break;
    case 5:
      dayName = "friday";
      break;
    case 6:
      dayName = "saturday";
      break;
    case 7:
      dayName = "sunday";
      break;
    default:
      return <h2>Not a valid day</h2>;
  }
  return <h2>{dayName}</h2>;
}
