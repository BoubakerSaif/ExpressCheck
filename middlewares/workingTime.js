function workingTime(req, res, next) {
  let currentDate = new Date();
  if (
    currentDate.getHours() > 9 &&
    currentDate.getHours() < 17 &&
    currentDate.getDay() > 0 &&
    currentDate.getDay() < 6
  ) {
    next();
  } else {
    res.send("Working Hours: Monday to Friday, from 9h to 17h");
  }
}

export default workingTime;
