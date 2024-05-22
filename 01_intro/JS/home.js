let number = prompt("Введіть число ")
alert(number**2)

let a = +prompt("Введіть 1 число")
let b = +prompt("Введіть 2 число")
alert((a+b)/2)


let side = prompt("Введіть сторону квадрата")
alert(side**2)

var metre = 0.621371
alert(prompt("Введіть кілометри для переведення в милі")*metre+" миль")

let num1 = +prompt("Введіть перше число");
let num2 = +prompt("Введіть друге число");

alert(`
    ${num1} + ${num2} = ${num1 + num2}
    ${num1} - ${num2} = ${num1 - num2}
    ${num1} * ${num2} = ${num1 * num2}
    ${num1} / ${num2} = ${num1 / num2}
`);

alert("Введіть a і b для рівняння ax+b=0")
let n1 = +prompt("a")
let n2 = +prompt("b")

alert("x" + "=" + -n1/n2)


let currentHours = +prompt("Введіть поточний час (години):")
let currentMinutes = +prompt("Введіть поточний час (хвилини):")

if (23 - currentHours< 0|| 59 - currentMinutes<0|| currentHours < 0 || currentHours > 23 || currentMinutes < 0 || currentMinutes > 59) {
    alert("введіть коректний час.");
    return;
}


let remainingHours = 23 - currentHours;
let remainingMinutes = 59 - currentMinutes;

if (remainingMinutes === 59) {
    remainingHours++;
    remainingMinutes = 0;
} else {
    remainingMinutes++;
}


alert("До наступного дня залишилося " + remainingHours + " годин і " + remainingMinutes + " хвилин.");



let n = +prompt('Введіть 3-значне число')
alert(parseInt((n%100)/10))


let A = +prompt("Введіть 5-значне число")
let B = A%10
alert(B*10000+parseInt(A/10))



alert(+prompt("Введіть суму продаж")*0.1+250+"$")