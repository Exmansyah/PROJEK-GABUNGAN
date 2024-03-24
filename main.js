let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");

function saklar(action, lamp) {
  if (action == 'on') {
    if (lamp == 1) {
      lampu1.src = "on.gif";
    }
  }
  if (action == 'off') {
    if (lamp == 1) {
      lampu1.src = "off.gif";
    }
  }
  if (action == 'on') {
    if (lamp == 2) {
      lampu2.src = "on.gif"
    }
  }
  if (action == 'off') {
    if (lamp == 2) {
      lampu2.src = "off.gif"
    }
  }
}