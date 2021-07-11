function solveEquation(a, b, c) {
  let arr = [];
  let D = b**2 - ((4 * a) * c);
    
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr = [x1, x2];
  }
  else if (D === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } 
  
  return arr; 
}


function calculateTotalMortgage(percent, contribution, amount, date) {
    if(typeof percent !== "number") {
      return  'Параметр "Процентная ставка" содержит неправильное значение "' + percent + '"';
    }

    if(typeof contribution !== "number") {
      return  'Параметр "Начальный взнос" содержит неправильное значение "' + contribution + '"';
    }
      
    if(typeof amount !== "number") {
      return  'Параметр "Общая стоимость" содержит неправильное значение "' + amount + '"';
    }

    let bodyCredit = amount - contribution;
    let numberOfMonths = monthDiff(new Date(), date);
    let percentOfMonth = percent / 12 / 100;
    let payment = bodyCredit * ((percentOfMonth + percentOfMonth / ((Math.pow(1 + percentOfMonth, numberOfMonths) - 1))));
    let totalAmount = payment * numberOfMonths;

    console.log(totalAmount.toFixed(2));
    return parseFloat(totalAmount.toFixed(2));
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}