import { animateCountUp } from "./animate-nums.js";

const form = document.querySelector("form.calculator-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const day = Number(formData.get("day"));
  const month = Number(formData.get("month"));
  const year = Number(formData.get("year"));
  const currentTimestamp = new Date().getTime();
  const birthTimestamp = new Date(`${year}-${month}-${day}`).getTime();
  if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year))
    return;
  const diff = currentTimestamp - birthTimestamp;
  const msInDay = 24 * 60 * 60 * 1000;
  const msInMonth = msInDay * 30.44; // Average days in a month
  const msInYear = msInDay * 365.25; // Average days in a year

  const years = Math.floor(diff / msInYear);
  const months = Math.floor((diff % msInYear) / msInMonth);
  const days = Math.floor((diff % msInMonth) / msInDay);

  const docYears = document.querySelector("p#years span");
  docYears.textContent = years;
  animateCountUp(docYears);
  const docMonths = document.querySelector("p#months span");
  docMonths.textContent = months;
  animateCountUp(docMonths);
  const docDays = document.querySelector("p#days span");
  docDays.textContent = days;
  animateCountUp(docDays);
});
