// let t = +prompt("Введіть скільки разів вивести '#'")
// let i=0
// while(i<=t)
// {
//     document.write(`<li> # </li>`)
//     i++
// }


// let a = +prompt("Введіть число")

// while(a>=0)
// {
//     document.write(`<li> ${a} </li>`)
//     a--
// }

// let a = +prompt("Введіть число")
// let n = +prompt("Введіть ступінь")
// let k = 1
// while(n>=1)
// {

//     k*=a
//     n--
// }
// document.write(`<li> ${k} </li>`)

// let num1 = +prompt("Введіть перше число")
// let num2 = +prompt("Введіть друге число")
// let i = 0
// let minNumber = num1<num2?num1:num2
// while(i<=minNumber)
// {
//     if(num1%i==0&&num2%i==0)
//     {
//         document.write(`<li> ${i} </li>`)
//     }
//     i++
// }

// let n = +prompt("Введіть число для факторіалу")
// let res = 1

// while(n>=1)
// {
//     res*=n
//     n--
// }
// document.write(`<li> ${res} </li>`)

// let res
// do{
//     res = prompt("2 + 2 * 2 = ?")
// }while(res!=6)


// let count = 0
// let a = 1000
// do
// {
//     a/=2

//     count++

// }while(a>=50)
// document.write(`<li> ${a} </li>`)
// document.write(`<li> ${count} </li>`)


// let number = +prompt("Введіть число")
// for(let i=1;i<=100;i++)
// {
//     if(number%i==0)
//     {
//         document.write(`<li> ${i} </li>`)
//     }
// }


// let a = +prompt("Введіть мінімальне значення діапазону")
// let b= +prompt("Введіть максимальне значення діапазону")

// for(let i = a;i<=b;i+=4)
// {
//     document.write(`<li> ${i} </li>`)
// }


// let num = +prompt("Введіть число")
// for(let i = 2;i<=num**0.5;i++)
// {
//     if(num%i!=0){
//         document.write("Prime")
//         break
//     }
//     else
//     {
//         document.write("not prime")
//         break
//     }
 
// }