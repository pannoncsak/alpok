(function (date, time) {
  date.textContent = moment().format('YYYY.MM.DD.');
  time.textContent = moment().format('HH:mm:ss');
  setInterval(function () {
    time.textContent = moment().format('HH:mm:ss');
  }, 1000);
})(document.getElementById('date'), document.getElementById('time'));