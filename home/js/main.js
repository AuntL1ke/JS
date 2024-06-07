
// function generateRand(){
//     let rand = Math.floor(Math.random()*100)+1


//     document.getElementById("number").innerText = rand
// }

// const fullscreenDiv = document.getElementById('fullscreen-div')
// const coordinatesDisplay = document.getElementById('coordinates')
// const buttonDisplay = document.getElementById('button')

// fullscreenDiv.addEventListener('mousemove', (event) => {
//     const x = event.clientX
//     const y = event.clientY
//     coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`
// });

// fullscreenDiv.addEventListener('mousedown', (event) => {
//     let button = ''
//     if (event.button === 0) {
//         button = 'Left'
//     } else if (event.button === 1) {
//         button = 'Middle'
//     } else if (event.button === 2) {
//         button = 'Right'
//     }
//     buttonDisplay.textContent = `${button} button clicked`
// });
let progress = 0

function addPercent(){
    if(progress<100){
        progress+=5
        if(progress>100){
            progress=100
        }
        document.getElementById('progress').style.width = progress+ '%'
    }
}
let like = 0
function likes(){
    like++
    document.getElementById("like").innerText = "Like " + like
}

let isHide = false;
        
function toggleText() {
    const textElement = document.getElementById('text');
    if (!isHide) {
        textElement.style.display = 'none';
        isHide = true;
    } else {
        textElement.style.display = 'block';
        isHide = false;
    }
}


function showTab(tabId) {

    var contents = document.querySelectorAll('.content div');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var tabs = document.querySelectorAll('.tabs li');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    

    document.getElementById(tabId).classList.add('active');
    

    event.target.classList.add('active');
}

function deleteNews(button){
    
    let parent = button.parentNode
    let p = parent.querySelector('p')
    if(p){p.remove()}
}

let buttons = document.querySelectorAll(".button");
let contents = document.querySelectorAll(".btn_content");

for (let i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener("click", function() {
        for (let j = 0; j < contents.length; j++)
        {
            if (contents[j] != contents[i])
            {
                contents[j].classList.add("hide");
                contents[j].classList.remove("show");
                buttons[j].style.backgroundColor = "#597ba0";
            }
        }

        contents[i].classList.toggle("hide");
        contents[i].classList.toggle("show");

        if (contents[i].classList.contains("show"))
        {
            buttons[i].style.backgroundColor = "#4873a2";
        }
        else if (contents[i].classList.contains("hide"))
        {
            buttons[i].style.backgroundColor = "#597ba0";
        }
    });

    buttons[i].addEventListener("selectstart", function(e) {
        e.preventDefault();
    });

    buttons[i].addEventListener("mouseover", function() {
        buttons[i].style.backgroundColor = "#4873a2";
    });

    buttons[i].addEventListener("mouseout", function() {
        if (!contents[i].classList.contains("show"))
        {
            buttons[i].style.backgroundColor = "#597ba0";
        }
    });
}