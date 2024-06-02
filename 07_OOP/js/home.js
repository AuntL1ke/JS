// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }


//     get radius() {
//         return this._radius;
//     }


//     set radius(r) {
//         if (r <= 0) {
//             throw new Error("Radius must be positive");
//         }
//         this._radius = r;
//     }


//     get diameter() {
//         return this.radius * 2;
//     }


//     area() {
//         return Math.PI * this.radius ** 2;
//     }


//     length() {
//         return 2 * Math.PI * this.radius;
//     }
// }

// try {
//     let c = new Circle(5); 

//     console.log(`Radius: ${c.radius}`); 
//     c.radius = 3; 
//     console.log(`New Radius: ${c.radius}`);
//     console.log(`Diameter: ${c.diameter}`); 
//     console.log(`Area: ${c.area()}`); 
//     console.log(`Circumference: ${c.length()}`); 
// } catch (e) {
//     console.error(e.message);
// }



class HtmlElement{
    constructor(tag,selfClose=false,text=''){
        this.tag = tag
        this.selfClose = selfClose
        this.text = text
        this.attributes= []
        this.styles = []
        this.children = []
    }

    setAttributes(name,value){
        this.attributes.push({name,value})
    }

    setStyles(name,value){
        this.styles.push({name,value})
    }

    appendChild(element){
        this.children.push(element)
    }
    appendChildtoBegib(element){this.children.unshift(element)}

    getHtml(){
        let attrs = this.attributes.map(attr => `${attr.name}="${attr.value}"`).join(' ')
        let styles = this.styles.map(style => `${style.name}: ${style.value};`).join(' ')

        if(styles){
            attrs+=`styles="${styles}"`
        }
        let childrenHtml = this.children.map(child=>child.getHtml()).join('')
        let html = `<${this.tag}${attrs ? ' ' + attrs : ''}${this.isSelfClosing ? ' /' : ''}>`

        if(!this.selfClose){
            html += `${this.text}${childrenHtml}</${this.tag}>`
        }
        return html
    }
}

let wrapper = new HtmlElement('div')
wrapper.setAttributes('id','wrapper')
wrapper.setStyles('display','flex')

let div1 = new HtmlElement('div')
div1.setStyles('width','300px')
div1.setStyles('margin','10px')
let h3_1 = new HtmlElement('h3')
h3_1.text = "What is Lorem Ipsum?"
let img_1 = new HtmlElement('img',true)
img_1.setStyles('width','100%')
img_1.setAttributes('alt','Lorem Ipsum')
let p_1 = new HtmlElement('p')
p_1.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque necessitatibus animi quos nostrum! Quas aut quod eveniet ratione esse nesciunt labore tenetur consequuntur ex quia obcaecati omnis, officiis voluptatem."
let a_1 = new HtmlElement('a')
a_1.text = "More..."
a_1.setAttributes('href','https://lipsum.com/')
a_1.setAttributes('target','_blank')
p_1.appendChild(a_1)
p_1.setStyles('text-align','justify')

div1.appendChild(h3_1)
div1.appendChild(img_1)
div1.appendChild(p_1)


let div2 = new HtmlElement('div')
div2.setStyles('width','300px')
div2.setStyles('margin','10px')
let h3_2 = new HtmlElement('h3')
h3_2.text = "What is Lorem Ipsum?"
let img_2 = new HtmlElement('img',true)
img_2.setStyles('width','100%')
img_2.setAttributes('alt','Lorem Ipsum')
let p_2 = new HtmlElement('p')
p_2.text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cumque necessitatibus animi quos nostrum! Quas aut quod eveniet ratione esse nesciunt labore tenetur consequuntur ex quia obcaecati omnis, officiis voluptatem."
let a_2 = new HtmlElement('a')
a_2.text = "More..."
a_2.setAttributes('href','https://lipsum.com/')
a_2.setAttributes('target','_blank')
p_2.appendChild(a_2)
p_2.setStyles('text-align','justify')

div2.appendChild(h3_2)
div2.appendChild(img_2)
div2.appendChild(p_2)

wrapper.appendChild(div1)
wrapper.appendChild(div2)

// document.write(wrapper.getHtml())


class CssClass{
    constructor(tag){
        this.tag = tag
        this.styles = []
    }

    setStyles(name, value){
        this.styles.push({name,value})
    }

    removeStyles(name){
        this.styles = this.styles.filter(style=>style.name!==name)
    }

    getCss(){
        let styles = this.styles.map(styles=>`${styles.name}:${styles.value}`).join(' ')
        return `.${this.tag} {${styles}}`
    }

}

let css = new CssClass('wrapper');
css.setStyles('background-color', 'green');
wrapper.setAttributes('class', 'wrapper');

// css.getCss()


class HtmlBlock{
    constructor(element){
        this.element = element
        this.cssClasses = []
    }

    addCssClass(CssClass){
        this.cssClasses.push(CssClass)
    }

    getCode(){
        let html = this.element.getHtml()

        let css = this.cssClasses.map(cssClass=>cssClass.getCss()).join('\n')
        return `<style>${css}</style>\n${html}`
    }
}

let block = new HtmlBlock(wrapper)

block.addCssClass(css)
document.write(block.getCode())