function conver24Hrto12Hr(str) {
  let hourInNum = Number(str.substring(0, 2));
  let convertedhour = 12;
  let clockCycle = "AM";
  if (hourInNum === 0) {
    convertedhour = 12;
  } else if (hourInNum > 12) {
    convertedhour = hourInNum - 12;
    clockCycle = "PM";
  } else if (hourInNum < 12) {
    convertedhour = hourInNum;
  }

  console.log(
    `${
      convertedhour < 10 ? "0" + convertedhour : convertedhour
    }:${str.substring(3, 5)} ${clockCycle}`
  );
}

conver24Hrto12Hr("00:47");
