// Задание 1
function getArrayParams(arr) {      
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  } 

  let avg = sum / arr.length;
  avg = avg.toFixed(2); 
  return { min: min, max: max, avg: avg };
}




// Задание 2

function worker(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]); 
  for (let i = 0; i < arrOfArr.length; i += 1) {
    let result = func(arrOfArr[i]); 
    if (max < result) {
      max = result;
    }
  }  
  return max;
}

// Задание 3


function worker2(arr) {
  let min = arr[0];
  let max = arr[0];
  let difference = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
    difference = max - min;
    
  } 
  return difference;
}
makeWork(arrOfArr, worker2)