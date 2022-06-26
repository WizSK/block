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


let x = 0;
let d = "August 20 2022";
let intervId = setInterval(() => {
  let timeR = getTimeRemaining(d);
  let color = "inherit";
  if ((x % 2) === 0){
	color="#c45151"
  }
  let timeF = `<span style="color: ${color}">${timeR.seconds}</span> secs ${timeR.minutes} mins ${timeR.hours} hours<br><span class="day" >${timeR.days}</span> days`;
  //    let timeF = `${timeR.seconds} সেকেন্ড ${timeR.minutes} মিন ${timeR.hours} ঘণ্টা ${timeR.days} দিন`;

  document.getElementById("dayBaki").innerHTML = timeF;
}, 1000);

let s = setInterval(()=> {x++; if ((x % 2) === 0) {console.log(x);};}, 1000)

