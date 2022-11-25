let timeleft = 20;

const timer = document.getElementById("timeL");


let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    timer.style.display = 'none';
    document.getElementById("link").style.display = 'block';

  }
  timer.innerText = timeleft;
  console.log(`${timeleft}`)
  timeleft -= 1;
}, 1000);