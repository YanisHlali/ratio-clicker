export default function getCurrentDate() {
     const months = [
          "janv.",
          "févr.",
          "mars",
          "avr.",
          "mai",
          "juin",
          "juil.",
          "août",
          "sept.",
          "oct.",
          "nov.",
          "déc.",
     ];
     const date = new Date();

     const morningOrAfternoon = date.getHours() >= 12 ? "PM" : "AM";

     const hour = date.getHours() % 12 || 12;
     const minute =
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

     const day = date.getDate();
     const month = months[date.getMonth()];
     const year = date.getFullYear();

     return `${hour}:${minute} ${morningOrAfternoon} · ${day} ${month} ${year}`;
}
