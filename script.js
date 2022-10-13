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
let d = "Nov 1 2022";
times()
let intervId = setInterval(times, 1000);

function times(){
  let timeR = getTimeRemaining(d);
  let color = "inherit";
  x++;
  if ((x % 2) === 0){
	color="#c45151"
  }
  let timeF = `<span style="color: ${color}">${timeR.seconds}</span> secs ${timeR.minutes} mins ${timeR.hours} hours<br><span class="day" >${timeR.days}</span> days`;

  document.getElementById("dayBaki").innerHTML = timeF;
}



  //    let timeF = `${timeR.seconds} সেকেন্ড ${timeR.minutes} মিন ${timeR.hours} ঘণ্টা ${timeR.days} দিন`;
