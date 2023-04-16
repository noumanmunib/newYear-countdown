const countdown = document.querySelector(".countdown");
const days = document.querySelector("#days");
const hours = document.querySelector("#hrs");
const minutes = document.querySelector("#min");
const seconds = document.querySelector("#sec");

const newYearTime = new Date("Jan 01, 2024 00:00:00").getTime();

const updateCountDown = function () {
  const currentTime = new Date().getTime();
  //   console.log(currentTime, newYearTime);

  let difference = newYearTime - currentTime;
  console.log(difference);

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let remainingDays = Math.floor(difference / day);
  //   let remainingHours = Math.floor(difference / hour) - remainingDays * 24;
  const remainingHours = Math.floor((difference % day) / hour);
  const remainingMin = Math.floor((difference % hour) / minute);
  const remainingSec = Math.floor((difference % minute) / second);

  days.innerHTML = `
    <div>${remainingDays}</div>
  `;
  hours.innerHTML = `
    <div>${remainingHours}</div>
  `;
  minutes.innerHTML = `
    <div>${remainingMin}</div>
  `;
  seconds.innerHTML = `
    <div>${remainingSec}</div>
  `;

  setTimeout(updateCountDown, 1000);
};

updateCountDown();
