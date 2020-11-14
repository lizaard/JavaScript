const massMark = 95;
const heightMark = 1.88;
const massJosh = 85;
const heightJosh = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJosh = massJosh / (heightJosh * heightJosh);
const mostHigherBMI = BMIMark > BMIJosh;

if (BMIMark > BMIJosh) {
    console.log(`mark mai mare ${BMIMark}`);
} else {
    console.log(`josh mai mare ${BMIJosh}`);
}


console.log(BMIMark, BMIJosh, mostHigherBMI);




const firstName = 'Andrei';
const birthYear = 1993;
const job = 'Front-end Developer';
const fullDate = new Date();
const year = fullDate.getFullYear()

const andrei = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;
console.log(andrei);



const manualCart = function() {
    let cart = document.querySelector('.cart');
    let heightCart = cart.offsetHeight;
    let widthCart = cart.offsetWidth;
console.log(widthCart);

    if ( widthCart == 9688 || heightCart == 231) {
        cart.innerHTML = 'Andrei e smecher'
        
    } else {
        cart.innerHTML = 'Andrei e bou'
    }
}; manualCart();


const codingChallengeThere = function() {
    
let theDolphinsAverageScore = (97 + 112 + 101) / 3;
let theKoalasAverageScore = (109 + 95 + 123) / 3;

console.log(theDolphinsAverageScore);
console.log(theKoalasAverageScore);

if (theDolphinsAverageScore > theKoalasAverageScore && theDolphinsAverageScore >= 100) {
    console.log('The Dolphins are the best');
} else if (theKoalasAverageScore > theDolphinsAverageScore && theKoalasAverageScore >= 100) {
    console.log('The koala are the best');
} else if (theDolphinsAverageScore === theKoalasAverageScore) {
    console.log('There is a draw!!');
} else {
    console.log('THe game was no Contest');
}


}; 
codingChallengeThere();




