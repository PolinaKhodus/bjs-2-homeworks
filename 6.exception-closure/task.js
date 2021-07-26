function parseCount (numProduct) {
    let unitsProduct = Number.parseInt(numProduct);
    if (Number.isNaN(unitsProduct) === true) { 
        throw new Error("Невалидное значение");
    }
    return unitsProduct;
}


function validateCount(values) {
    try {
        let result = parseCount(values);
        return result;
    }
    catch(e) {
        return e;
    }
 }



 class Triangle {
        constructor (firstSide, secondSide, thirdSide) {
         if ((firstSide + secondSide) <= thirdSide || (secondSide + thirdSide) <= firstSide || (firstSide + thirdSide) <= secondSide) {
             throw new Error ( "Треугольник с такими сторонами не существует");
         }

         this.firstSide = firstSide;
         this.secondSide = secondSide;
         this.thirdSide = thirdSide;
    }

    getPerimeter ()  {
        if (this.firstSide === undefined || this.secondSide === undefined || this.thirdSide === undefined) {
            return "Ошибка! Треугольник не существует";
        }

        let perimeter = this.firstSide + this.secondSide + this.thirdSide;

        return perimeter;
     }

     getArea () {
        if (this.firstSide === undefined || this.secondSide === undefined || this.thirdSide === undefined) {
            return "Ошибка! Треугольник не существует";
        }

        let haifPerimetr = this.getPerimeter() / 2;
        let area = Math.sqrt(haifPerimetr * (haifPerimetr - this.firstSide) * (haifPerimetr - this.secondSide) * (haifPerimetr - this.thirdSide));

        return Number(area.toFixed(3));
     }
 }

 function  getTriangle(firstSide, secondSide, thirdSide) {
    
     try { 
        let triangle = new Triangle(firstSide, secondSide, thirdSide);
        return triangle;
     }
     catch(e) {
        return new Triangle();
     }
 }

 