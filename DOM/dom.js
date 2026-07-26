let box = document.getElementById("red")
box.style.backgroundColor = "red"
box.innerHTML = "heelooo"

// document.querySelector(".box").style.backgroundColor = "red" // select the only first one

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e => {
// e.style.backgroundColor = "green"
// }) // select everyone

document.getElementById("rem").removeAttribute("style")

let div = document.createElement("div");
div.innerHTML = "CREATIN ELEMT DIV"
div.setAttribute("style", "background-color: yellow; border: 2px solid black;")
document.querySelector(".container").append(div)


document.getElementById("rem").remove()

let btn = document.querySelector("button")
btn.addEventListener("click", () => { btn.style.backgroundColor = "red" })

