// let rectangle = {
//     height: "100px",
//     width: "100px",
//     background_color:"blueviolet"
// }

// let elipse = {
//     height: "100px",
//     width: "200px",
//     background_color:"blueviolet",
//     border_radius:'50%'
// }

// let circle = {
//     height: "200px",
//     width: "200px",
//     background_color:"blueviolet",
//     border_radius:'50%'
// }

// let triangle = {
//     height: 0,
//     width: 0,
//     border_left:"50px solid transparent",
//     border_right:"50px solid transparent",
//     border_bottom:"100px solid #243758",
// }



class RootFigure{
    #name
    constructor(width,height,bg_color="white",color="black")
    {
        this.width=width
        this.height=height
        this.bg_color=bg_color
        this.color=this.color
        this.#name="None"
        this.figure_style = `width:${this.width}px; height:${this.height}px; background-color:${this.bg_color};color:${this.color};display:flex;`
        
    }
    create()
    {
        
        document.write(`<div style = "${this.figure_style}">${this.#name}</div>`)
    }
    // set(value)
    // {
    //     this.#name = value.trim().length <1 ? "Rectangle" : value
    // }
}

class Rectangle extends RootFigure{
    constructor(width,height,bg_color="white",color="black")
    {
        super(width,height,bg_color,color)
    }
}

class Ellipse extends RootFigure{
    constructor(width,height,bg_color="white",color="black")
    {
        super(width,height,bg_color,color)
        this.figure_style+=`border-radius:50%`
    }
}
class Circle extends Ellipse
{
    constructor(width,bg_color="white",color="black")
    {
        super(width,width,bg_color,color)
    }
}

// class Triangle extends RootFigure
// {
//     constructor(width,height,bg_color="white")
//     {
//         super(width,height,bg_color)
//     }
//     create()

//     {
//         document.write(`<div style = "border-left: ${this.width/2}px solid transparent;border-right:${this.width/2}px solid transparent;border-bottom:${this.height}></div>`)
//     }
// }
let rg_1 = new Rectangle(200,100,"purple")
//rg_1.set("Purple Rectangle")
rg_1.create()
let rg_2 = new Rectangle(300,100,"pink")
//r//g_2.set("Pink Rectangle")
rg_2.create()

let el_1 = new Ellipse(300,200,"yellow")
//el_1.set("Yellow Ellipse")
el_1.create()

let circle =  new Circle(300,"lightblue")