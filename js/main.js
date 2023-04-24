'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const WebT = {};

  WebT.settings = {
    countdown_date: 'May 1, 2023'
  };

  WebT.elements = {
    countdown: document.getElementById("countdown")
  };

  /**  **/
  (() => {
    let countDownDate = new Date(WebT.settings.countdown_date).getTime();

    const x = setInterval(function() {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      //WebT.elements.countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      WebT.elements.countdown.innerHTML = `
        <span class="intro-countdown__item">${days} <span>Дней</span></span>
        <span class="intro-countdown__item">${hours} <span>Часов</span></span>
        <span class="intro-countdown__item">${minutes} <span>Минут</span></span>
        <span class="intro-countdown__item">${seconds} <span>Секунд</span></span>
      `;

      if (distance < 0) {
        clearInterval(x);
        WebT.elements.countdown.innerHTML = "EXPIRED";
      }
    }, 1000);
  })();
});