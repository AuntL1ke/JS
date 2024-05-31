// let f1 = (a,b) =>{
//     if(a>b) return -1
//     else if(a<b) return 1
//     else return 0 
// }
// document.write(f1(5,-9))

// let f2 = (n) =>{
//     if(n==1 || n==0) return 1;
//     else return n*fac(n-1)
// }
// document.write(f2(5))


// let f3 = (a,b,c) => {
//     return a*100+b*10+c

// }
// document.write(f3(4,7,9))

// let f4 = (a,b=a) =>{
//     return a*b
// }
// document.write(f4(5))

// let f5 = (n) =>
// {
//     let sum = 0
//     for (let i=1;i<=n/2;i++) if(n%i===0) sum+=i
//     return sum === n
// }
// // document.write(f5(6))


// let f6 = (min,max) =>{
//     let num = []
//     for(let i=min;i<=max;i++) if (f5(i)) num.push(i) 
//     document.write(num.join(", "))
// }

// f6(1,1000)



// let f7 = (hours,min=0,sec=0) =>{
//     min = min<10? '0'+min:min
//     sec = sec<10? '0'+sec:sec
//     return `${hours}:${min}:${sec}`
// }
// document.write(f7(5,8,40))


// let f8 = (h,m,s) =>{
//     return h*3600+m*60+s
// }
// document.write(f8(1,30,5))

// let f9 = (s) =>{
//     let h = Math.floor(s/3600)
//     let m = Math.floor((s%3600)/60)
//     s = s%60
//     return f7(h,m,s)
// }
// document.write(f9(5405))



// let f10 = (h1,m1,s1,h2,m2,s2) =>{
//     let first = f8(h1,m1,s1)
//     let second = f8(h2,m2,s2)
//     let res =Math.abs(first-second)
//     return f9(res)

// }