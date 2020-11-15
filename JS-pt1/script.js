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
    let cart = document.querySelector(".cart");
    let heightCart = cart.offsetHeight;
    let widthCart = cart.offsetWidth;
    console.log(cart);
    console.log(heightCart);
    console.log(widthCart);

    let card = document.querySelector(".card");
    let heightCard = card.offsetHeight;
    let widthCard = card.offsetWidth;
    console.log(card);
    console.log(heightCard);
    console.log(widthCard);

    if ( widthCart == widthCard && heightCart == heightCard ) {
        cart.innerHTML = 'Andrei e smecher'
        card.innerHTML = 'Andrei e smecher'
        
    } else {
        cart.innerHTML = 'Andrei e bou'
        card.innerHTML = 'Andrei e bou'
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


const forWhileEcample = function() {

    let suma = 0;

    for (let index = 0; index <= 100; index++) {
        suma = suma + index; 
        
    }

    console.log(suma);
    var index = 0;
    while (index < 10) { 
        index++;
        console.log(index);   
    }


    // for (let i = 0; i < 50; i++) {
    //     if (i % 4 == 0) {
    //         console.log('diana');
    //     } else if (i % 4 == 1) {
    //         console.log('andrei');
    //     } else if ( i % 4 == 2) {
    //         console.log('mihaela');
    //     } else {
    //         console.log('michele');
    //     }
        
    // }

   
    
    
};
 forWhileEcample();


 function whiiilee() {
    var i = 0;
    while(i < 16) {
        i++
        if (i % 4 == 0) {
            console.log('diana');
        } else if (i % 4 == 1) {
            console.log('andrei');
        } else if ( i % 4 == 2) {
            console.log('mihaela');
        } else {
            console.log('michele');
        }
    }
    
}
whiiilee();


var xxx = function CalculateAge(birthYear, currentYear) {
    return currentYear - birthYear
};



var ANIDIANEI = function() {
    var yyy = xxx;
    (function () {
            let year = new Date().getFullYear();
            console.log(year);
            var calculatorcacat = yyy(1996, year)
            console.log(calculatorcacat);
    })();
}
ANIDIANEI();



const Pensie = (e) => {
    const age = 2020 - e;
    const ret = 65 - age;
    return ret;
    
    
}
console.log(Pensie(1993));






let codingChallengeFive = (function() {
        const calcAverageScore = (scoreOne, scoreTwo, scoreThree) => {
            return (scoreOne + scoreTwo + scoreThree) / 3;
        }
        const dolphinsAvrgScore = calcAverageScore(44, 23, 71);
        const dolphinsAvrgScoreTwo = calcAverageScore(85, 54, 41);
        const koalasAvrgScore = calcAverageScore(65, 54, 49);
        const koalasAvrgScoreTwo = calcAverageScore(23, 34, 27);
        console.log(dolphinsAvrgScore, koalasAvrgScore);
        console.log(dolphinsAvrgScoreTwo, koalasAvrgScoreTwo);

        function CheckWinner(dAvrg, kAvrg) {
            if (dAvrg > kAvrg) {
                return `Dolphins win ${dAvrg} vs. ${kAvrg}`
            } else {
                return `Koala win ${kAvrg} vs. ${dAvrg}`
            }
        }
        console.log(CheckWinner(dolphinsAvrgScore, koalasAvrgScore));
        console.log(CheckWinner(dolphinsAvrgScoreTwo, koalasAvrgScoreTwo));

})();




let AnaidExercitiu = (function() {
    for (let index = 1; index <= 50; index++) {
        if (index % 3 == 0 && index % 5 == 0 ) {
            console.log('fizzbuzz');
        } else if(index % 5 == 0) {
            console.log('fizz');
        } else if(index % 3 == 0) {
            console.log('buzz');
        } else {
            console.log(index);
        }
    }
})();




const andreiArray = new Array(12,13,14,15)
console.log(andreiArray[andreiArray.length - 1]);