var experience = {};

initialize();

function initialize() {
  let { years, months } = calculateExperience();
  document.querySelector("#experienceVal").innerHTML = `${
    years == 1 ? `${years} year` : years > 1 ? `${years} years` : ""
  } ${months == 1 ? `${months} month` : months > 1 ? `${months} months` : ""}`;
}

function calculateExperience() {
  const today = new Date();
  const dateOfCareerStart = new Date("2023-04-10");
  const diffInMonths =
    today.getMonth() -
    dateOfCareerStart.getMonth() +
    12 * (today.getFullYear() - dateOfCareerStart.getFullYear());
  const diffInYears = Math.floor(diffInMonths / 12);

  return { months: diffInMonths % 12, years: diffInYears };
}
