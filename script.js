const next = document.querySelector(".arrow-next")
const prev = document.querySelector(".arrow-prev")
let slider_index = 0;


function showSlide(index){
    let slide = document.querySelectorAll(".slide")
    let dots = document.querySelectorAll(".nav-dot")



    if(index>=slide.length){
        slider_index = 0;
    }

    if(index<0){
        slider_index = slide.length -1 
    }

    for(let i = 0; i<slide.length; i++){
        slide[i].style.display = "none"
        dots[i].classList.remove("active-dot")
    }

    slide[slider_index].style.display = "block"
    dots[slider_index].classList.add("active-dot")

}

showSlide(slider_index)

prev.addEventListener("click", function(){
    showSlide(slider_index = slider_index - 1)
})

next.addEventListener("click", function(){
    showSlide(slider_index = slider_index + 1)
})

document.querySelectorAll(".nav-dot").forEach((element)=>{
    element.addEventListener("click", function(){
    var dots = Array.prototype.slice.call(element.parentElement.children),
    dot_index = dots.indexOf(element)
    showSlide(slider_index = dot_index)
    })
})


let calculator_buttons = [
    {
        name : "delete",
        symbol : "⌫",
        formula : false,
        type : "key"
    },{
        name : "clear",
        symbol : "C",
        formula : false,
        type : "key"
    },{
        name : "percent",
        symbol : "%",
        formula : "/100",
        type : "number"
    },{
        name : "division",
        symbol : "÷",
        formula : "/",
        type : "operator"
    },{
        name : "7",
        symbol : 7,
        formula : 7,
        type : "number"
    },{
        name : "8",
        symbol : 8,
        formula : 8,
        type : "number"
    },{
        name : "9",
        symbol : 9,
        formula : 9,
        type : "number"
    },{
        name : "multiplication",
        symbol : "×",
        formula : "*",
        type : "operator"
    },{
        name : "4",
        symbol : 4,
        formula : 4,
        type : "number"
    },{
        name : "5",
        symbol : 5,
        formula : 5,
        type : "number"
    },{
        name : "6",
        symbol : 6,
        formula : 6,
        type : "number"
    },{
        name : "addition",
        symbol : "+",
        formula : "+",
        type : "operator"
    },,{
        name : "1",
        symbol : 1,
        formula : 1,
        type : "number"
    },{
        name : "2",
        symbol : 2,
        formula : 2,
        type : "number"
    },{
        name : "3",
        symbol : 3,
        formula : 3,
        type : "number"
    },{
        name : "subtraction",
        symbol : "–",
        formula : "-",
        type : "operator"
    },{
        name : "0",
        symbol : 0,
        formula : 0,
        type : "number"
    },{
        name : "comma",
        symbol : ".",
        formula : ".",
        type : "number"
    },{
        name : "calculate",
        symbol : "=",
        formula : "=",
        type : "calculate"
    }
];


const input_element = document.querySelector(".input")
const output_operation_element = document.querySelector(".operation .value")
const output_result_element = document.querySelector(".result .value")


function showButton(){
    const btns_per_row = 4;
    let added_btns = 0;

    calculator_buttons.forEach(button=>{
        if(added_btns % btns_per_row == 0){
            input_element.innerHTML += `<div class="row"></div>`
        }
    
        const row = document.querySelector(".row:last-child")
    
        row.innerHTML += `<button id="${button.name}">
                            ${button.symbol}  
                            </button>                  
        `
        added_btns++;
    })
}


showButton()


input_element.addEventListener("click", event =>{
    let targetedBtn = event.target;

    calculator_buttons.forEach(button=>{
        if(targetedBtn == button.id){
            return calculate(button)
        }
    })
})




