// let student = new Object()


// student.name = "Pavlo"
// student.age = 19

// console.log(student)


// let key = "surname"

// let student = {
//     name:"Olena",
//     year:2000,
//     age:20,
//     email:"olena@gmail.com",
//     [key]:"Bondar",
//     getAge: function()
//     {
//         return new Date().getFullYear()-this.year
//     }
// }

// console.log(student)

// student.age=21
// student.group = "PV321"
// student["mark history"] = 12

// console.log(student["name"])

// for(const key in student){
//     document.write(`<p> ${key} : ${student[key]}</p>`)
// }

//Object.keys(student).forEach(key => {document.write(`<p> ${key} : ${student[key]} </p>`)})

// function Student(name,year)
// {
//     this.name = name
//     this.year = year
// }

// let Ivan = new Student("Ivan",19)
// let olena = new Student("Olena",22)


// console.log(Ivan)
// console.log(olena)


// Student.prototype.group = "PV321"
// Student.prototype.getAge = () => new Date(year).getFullYear - Student.year


// console.log(Ivan.group)
// console.log(olena.group)


// console.log("name" in Ivan)
// delete Ivan.name
// console.log(Ivan)


// let ford = Object.create({
//     CalculateDistancePerYear:function()
//     {
//         Object.defineProperties(this,"distanceYear",{
//             value:(this.distance/this.age).toFixed(3),
//             enumerable:false
//         })
        
//         return this.distance/this.age
//     }
// },{
//     model:{
//         value:"Ford",
//         writable:true,
//         configurable:false,
//         enumerable:true
//     },
//     year:{
//         value:2000,
//         writable:false
//     },
//     distance:{
//         value:4546,
//         writable:true,
//         enumerable:false,
//         configurable:true
//     },
//     age:{
//         get:function(){
//             console.log("get value")
//             return new Date().getFullYear - this.year
//         },
//         set:function()
//         {
//             console.log("edit value")
//         }
//     }
    
// })

// for(const key in ford)
// {
//     console.log(key)
// }

// Object.keys(ford).forEach({x})