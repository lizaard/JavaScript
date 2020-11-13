const massMark = 95;
const heightMark = 1.88;
const massJosh = 85;
const heightJosh = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJosh = massJosh / (heightJosh * heightJosh);
const markHigherBMI = BMIMark > BMIJosh;


console.log(BMIMark, BMIJosh, markHigherBMI);