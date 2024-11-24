function zero(n) {
  if(n < 10) {
    return '0' + n;
  } else {
    return n;
  }
}

setInterval(function() {
  document.querySelector(".time").innerHTML = `${zero(new Date().getHours())}:${zero(new Date().getMinutes())}`;
});