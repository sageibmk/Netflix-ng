var btnOne = document.querySelector(".btn1")
var btnTwo = document.querySelector(".btn2")
var btnThree = document.querySelector(".btn3")
var btnFour = document.querySelector(".btn4")
var btnFive = document.querySelector(".btn5")
var btnSix = document.querySelector(".btn6")

// p-tag expand
var expandOne = document.querySelector(".p-tag1")
var expandTwo = document.querySelector(".p-tag2")
var expandThree = document.querySelector(".p-tag3")
var expandFour = document.querySelector(".p-tag4")
var expandFive = document.querySelector(".p-tag5")
var expandSix = document.querySelector(".p-tag6")

// span

var spanOne = document.querySelector(".span1")
var spanTwo = document.querySelector(".span2")
var spanThree = document.querySelector(".span3")
var spanFour = document.querySelector(".span4")
var spanFive = document.querySelector(".span5")
var spanSix = document.querySelector(".span6")


btnOne.addEventListener("click", () =>{
    expandOne.classList.toggle("active")

    if(expandOne.classList.contains("active")){
        expandOne.style.height = "fit-content"
        spanOne.innerHTML = "&times"
    }
    else{
        expandOne.style.height = "0px"
        spanOne.innerHTML = "&plus;" 
    }
    expandTwo.classList.remove("active")
    expandThree.classList.remove("active")
    expandFour.classList.remove("active")
    expandFive.classList.remove("active")
    expandSix.classList.remove("active")
    expandTwo.style.height = "0px"
    expandThree.style.height = "0px"
    expandFour.style.height = "0px"
    expandFive.style.height = "0px"
    expandSix.style.height = "0px"
    spanTwo.innerHTML = "&plus;"
    spanThree.innerHTML = "&plus;"
    spanFour.innerHTML = "&plus;"
    spanFive.innerHTML = "&plus;"
    spanSix.innerHTML = "&plus;"
})


btnTwo.addEventListener("click", () =>{
    expandTwo.classList.toggle("active")

    if(expandTwo.classList.contains("active")){
        expandTwo.style.height = "fit-content"
        spanTwo.innerHTML = "&times"
    }
    else{
        expandTwo.style.height = "0px"
        spanTwo.innerHTML = "&plus;" 
    }
    expandOne.classList.remove("active")
    expandThree.classList.remove("active")
    expandFour.classList.remove("active")
    expandFive.classList.remove("active")
    expandSix.classList.remove("active")
    expandOne.style.height = "0px"
    expandThree.style.height = "0px"
    expandFour.style.height = "0px"
    expandFive.style.height = "0px"
    expandSix.style.height = "0px"
    spanOne.innerHTML = "&plus;"
    spanThree.innerHTML = "&plus;"
    spanFour.innerHTML = "&plus;"
    spanFive.innerHTML = "&plus;"
    spanSix.innerHTML = "&plus;"
})

btnThree.addEventListener("click", () =>{
    expandThree.classList.toggle("active")

    if(expandThree.classList.contains("active")){
        expandThree.style.height = "fit-content"
        spanThree.innerHTML = "&times"
    }
    else{
        expandThree.style.height = "0px"
        spanThree.innerHTML = "&plus;" 
    }
    expandOne.classList.remove("active")
    expandTwo.classList.remove("active")
    expandFour.classList.remove("active")
    expandFive.classList.remove("active")
    expandSix.classList.remove("active")
    expandOne.style.height = "0px"
    expandTwo.style.height = "0px"
    expandFour.style.height = "0px"
    expandFive.style.height = "0px"
    expandSix.style.height = "0px"
    spanOne.innerHTML = "&plus;"
    spanTwo.innerHTML = "&plus;"
    spanFour.innerHTML = "&plus;"
    spanFive.innerHTML = "&plus;"
    spanSix.innerHTML = "&plus;"
})

btnFour.addEventListener("click", () =>{
    expandFour.classList.toggle("active")

    if(expandFour.classList.contains("active")){
        expandFour.style.height = "fit-content"
        spanFour.innerHTML = "&times"
    }
    else{
        expandFour.style.height = "0px"
        spanFour.innerHTML = "&plus;" 
    }
    expandOne.classList.remove("active")
    expandTwo.classList.remove("active")
    expandThree.classList.remove("active")
    expandFive.classList.remove("active")
    expandSix.classList.remove("active")
    expandOne.style.height = "0px"
    expandTwo.style.height = "0px"
    expandThree.style.height = "0px"
    expandFive.style.height = "0px"
    expandSix.style.height = "0px"
    spanOne.innerHTML = "&plus;"
    spanTwo.innerHTML = "&plus;"
    spanThree.innerHTML = "&plus;"
    spanFive.innerHTML = "&plus;"
    spanSix.innerHTML = "&plus;"
})

btnFive.addEventListener("click", () =>{
    expandFive.classList.toggle("active")

    if(expandFive.classList.contains("active")){
        expandFive.style.height = "fit-content"
        spanFive.innerHTML = "&times"
    }
    else{
        expandFive.style.height = "0px"
        spanFive.innerHTML = "&plus;" 
    }
    expandOne.classList.remove("active")
    expandTwo.classList.remove("active")
    expandThree.classList.remove("active")
    expandFour.classList.remove("active")
    expandSix.classList.remove("active")
    expandOne.style.height = "0px"
    expandTwo.style.height = "0px"
    expandThree.style.height = "0px"
    expandFour.style.height = "0px"
    expandSix.style.height = "0px"
    spanOne.innerHTML = "&plus;"
    spanTwo.innerHTML = "&plus;"
    spanThree.innerHTML = "&plus;"
    spanFour.innerHTML = "&plus;"
    spanSix.innerHTML = "&plus;"
})

btnSix.addEventListener("click", () =>{
    expandSix.classList.toggle("active")

    if(expandSix.classList.contains("active")){
        expandSix.style.height = "fit-content"
        spanSix.innerHTML = "&times"
    }
    else{
        expandSix.style.height = "0px"
        spanSix.innerHTML = "&plus;" 
    }
    expandOne.classList.remove("active")
    expandTwo.classList.remove("active")
    expandThree.classList.remove("active")
    expandFour.classList.remove("active")
    expandFive.classList.remove("active")
    expandOne.style.height = "0px"
    expandTwo.style.height = "0px"
    expandThree.style.height = "0px"
    expandFour.style.height = "0px"
    expandFive.style.height = "0px"
    spanOne.innerHTML = "&plus;"
    spanTwo.innerHTML = "&plus;"
    spanThree.innerHTML = "&plus;"
    spanFour.innerHTML = "&plus;"
    spanFive.innerHTML = "&plus;"
})
