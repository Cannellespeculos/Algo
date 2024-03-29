export function deadpool(steps) {
  let time = 0;
  let pv = 100;
  for (let i = 0; i <= steps.length; i++) {
    switch (steps[i]) {
      case "S":
        time += 10;
        pv -= 10;
        break;

      case "_":
        time += 10;
        pv += 5;
        break;

      case "H":
        time += 30;
        pv -= 25;
        break;

      case "T":
        time += 120;
        pv -= 50;
        break;

      case "E":
        pv -= 100;
        break;

      default:
        break;
    }

    if (pv > 100) {
      pv = 100;
    }
    if (pv <= 0) {
      time += 300;
      pv = 100;
    }
  }

  let rest = time - time % 60
  let min = rest / 60;
  let sec = time % 60;
  min = Math.round(min);
  return min + "min_" + sec + "sec_" + pv + "hp";

}

