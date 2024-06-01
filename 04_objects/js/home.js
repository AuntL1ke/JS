// let car = {
//     manufacturer: "Toyota",
//     model: "Camry",
//     year: 2021,
//     avg: 60
// }

// function display(car){
//     console.log(`Виробник: ${manufacturer}`)
//     console.log(`Модуль: ${model}`)
//     console.log(`Рік: ${year}`)
//     console.log(`Середня швидкість: ${avg}`)
// }

// function calculate(car, distance){
//     let time = distance/car.avg
//     let breaks = Math.floor(time/4)
//     return time+breaks
// }


// function Fraction(numerator, denominator) {
//     this.numerator = numerator;
//     this.denominator = denominator;
// }

// function simplifyFraction(fraction) {
//     let gcd = function(a, b) {
//         if (!b) {
//             return a;
//         }
//         return gcd(b, a % b);
//     };
//     let common = gcd(fraction.numerator, fraction.denominator);
//     return new Fraction(fraction.numerator / common, fraction.denominator / common);
// }

// let fraction1 = new Fraction(2, 5);
// let fraction2 = new Fraction(7, 9);

// function addFraction(fraction1, fraction2) {
//     let numerator = fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator;
//     let denominator = fraction1.denominator * fraction2.denominator;
//     return simplifyFraction(new Fraction(numerator, denominator));
// }

// function subFraction(fraction1, fraction2) {
//     let numerator = fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator;
//     let denominator = fraction1.denominator * fraction2.denominator;
//     return simplifyFraction(new Fraction(numerator, denominator));
// }

// function multFraction(fraction1, fraction2) {
//     let numerator = fraction1.numerator * fraction2.numerator;
//     let denominator = fraction1.denominator * fraction2.denominator;
//     return simplifyFraction(new Fraction(numerator, denominator));
// }

// function divFraction(fraction1, fraction2) {
//     let numerator = fraction1.numerator * fraction2.denominator;
//     let denominator = fraction1.denominator * fraction2.numerator;
//     return simplifyFraction(new Fraction(numerator, denominator));
// }

// function fractionToString(fraction) {
//     return `${fraction.numerator}/${fraction.denominator}`;
// }

// document.write("Додавання: " + fractionToString(addFraction(fraction1, fraction2)) + "<br>");
// document.write("Віднімання: " + fractionToString(subFraction(fraction1, fraction2)) + "<br>");
// document.write("Множення: " + fractionToString(multFraction(fraction1, fraction2)) + "<br>");
// document.write("Ділення: " + fractionToString(divFraction(fraction1, fraction2)) + "<br>");



// function Time(h, m, s) {
//     this.h = h;
//     this.m = m;
//     this.s = s;
// }

// Time.prototype.displayTime = function() {
//     let h = String(this.h).padStart(2, '0');
//     let m = String(this.m).padStart(2, '0');
//     let s = String(this.s).padStart(2, '0');
//     console.log(`${h}:${m}:${s}`);
// }

// Time.prototype.addSeconds = function(seconds) {
//     this.s += seconds;
//     while (this.s >= 60) {
//         this.m += 1;
//         this.s -= 60;
//     }
//     while (this.s < 0) {
//         this.s += 60;
//         this.m -= 1;
//     }
//     this.addMinutes(0);
// }

// Time.prototype.addMinutes = function(minutes) {
//     this.m += minutes;
//     while (this.m >= 60) {
//         this.h += 1;
//         this.m -= 60;
//     }
//     while (this.m < 0) {
//         this.m += 60;
//         this.h -= 1;
//     }
//     this.addHours(0); 
// }

// Time.prototype.addHours = function(hours) {
//     this.h += hours;
//     while (this.h >= 24) {
//         this.h -= 24;
//     }
//     while (this.h < 0) {
//         this.h += 24;
//     }
// }

// let time = new Time(20, 5, 45);
// time.displayTime(); 

// time.addSeconds(30);
// time.displayTime(); 

// time.addMinutes(60);
// time.displayTime();

// time.addHours(5);
// time.displayTime(); 
