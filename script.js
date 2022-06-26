function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

let d = "August 20 2022";
let intervId = setInterval(() => {
  let timeR = getTimeRemaining(d);
  let timeF = `${timeR.seconds} secs ${timeR.minutes} mins ${timeR.hours} hours<br><span>${timeR.days}</span> days`;
  //    let timeF = `${timeR.seconds} সেকেন্ড ${timeR.minutes} মিন ${timeR.hours} ঘণ্টা ${timeR.days} দিন`;

  document.getElementById("dayBaki").innerHTML = timeF;
}, 1000);
