var dateDiffInDays = function (date1, date2) {
  const utcDate1 = Date.UTC(
    parseInt(date1.substring(0, 4)),
    parseInt(date1.substring(5, 7)) - 1,
    parseInt(date1.substring(8))
  );

  const utcDate2 = Date.UTC(
    parseInt(date2.substring(0, 4)),
    parseInt(date2.substring(5, 7)) - 1,
    parseInt(date2.substring(8)) 
  );

  const diffInMilliseconds = utcDate2 - utcDate1;
  const diffInDays = diffInMilliseconds / (24 * 60 * 60 * 1000);

  return diffInDays;
};

const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
