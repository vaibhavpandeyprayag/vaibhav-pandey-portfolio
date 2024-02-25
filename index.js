var experience = {};

initialize();

function initialize() {
  let { years, months } = calculateExperience();
  document.querySelector("#experienceVal").innerHTML = `${
    years == 1 ? `${years} year` : years > 1 ? `${years} years` : ""
  } ${months == 1 ? `${months} month` : months > 1 ? `${months} months` : ""}`;

  window.addEventListener("scroll", setNavBar);
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

function setNavBar() {
  if (window.scrollY >= 25) {
    // my-md-5
    document.querySelector("#navBar").classList.remove("my-md-5");
    document.querySelector("#navBar").classList.add("bg-black");
    console.log(">= 15");
  } else {
    document.querySelector("#navBar").classList.add("my-md-5");
    document.querySelector("#navBar").classList.remove("bg-black");
    console.log("< 15");
  }
}
