const deg=6;
const hr=document.querySelector('#hr');
const min=document.querySelector('#mn');
const sec=document.querySelector('#sc');


setInterval(()=> {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;

  min.style.transform = `rotateZ(${(mm)}deg)`;

  sec.style.transform = `rotateZ(${(ss)}deg)`;

}, 1000)
