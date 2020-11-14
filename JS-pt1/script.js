'use strict';

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





const daySwitch = function() {
    const day = 'monday';
    const dayli = 'moon';

    switch (day, dayli) {
        case "monday": console.log('TEST!');
                       console.log('TEST2');
            break;
    case "moon": console.log('merge');
    break;
        default: console.log('test1');
            break;
    }
};
daySwitch();



const ternaryOperator = function() {
    const age = 27;
    age >= 18 ? console.log("bea bere") : console.log('bea apa');;


    const drink = age >= 22 ? 'wine' : 'apa';
    console.log(drink);
};
ternaryOperator();




const codingChallengeFour = function() {

    function methodOne() {
        const billOne = 275;
        const billTwo = 40;
        const billTree = 430;
    
        const tipBillOne = (billOne / 100) * 15;
        console.log(tipBillOne);
        const tipBillTwo = (billTwo / 100) * 20;
        console.log(tipBillTwo);
        const tipBillTree = (billTree / 100) * 20;
        console.log(tipBillTree);
    
        console.log(`The bill was ${billOne}, the tip was ${tipBillOne}, and the total value ${billOne + tipBillOne}`);
        console.log(`The bill was ${billTwo}, the tip was ${tipBillTwo}, and the total value ${billTwo + tipBillTwo}`);
        console.log(`The bill was ${billTree}, the tip was ${tipBillTree}, and the total value ${billTree + tipBillTree}`);        
    } methodOne();
    
    function methodTwo() {
        const BillOne = 275;
        const BillTwo = 40;
        const BillTree = 430;

        const TipOne = BillOne <= 300 && BillOne >= 50 ? BillOne * 0.15 : BillOne * 0.2;
        const TipTwo = BillTwo <= 300 && BillTwo >= 50 ? BillTwo * 0.15 : BillTwo * 0.2;
        const TipTree = BillTree <= 300 && BillTree >= 50 ? BillTree * 0.15 : BillTree * 0.2;

        console.log(`The bill was ${BillOne}, the tip was ${TipOne}, and the total value ${BillOne + TipOne}`);
        console.log(`The bill was ${BillTwo}, the tip was ${TipTwo}, and the total value ${BillTwo + TipTwo}`);
        console.log(`The bill was ${BillTree}, the tip was ${TipTree}, and the total value ${BillTree + TipTree}`);
    } methodTwo();

};
codingChallengeFour();

