const converter = document.querySelector("form")

converter .addEventListener("submit",convert)





function convert(event){
    event.preventDefault()

    let temperature = document.querySelector(".input").value

    if(temperature === ""){
        alert ("temperature cannot be empty")
    
    }else{
        let farenheight = (Number(temperature)* (9/5)) + 32

        document.querySelector(".farenheight").innerHTML = temperature + ("⁰c")
        document.querySelector(".celcius").innerHTML = farenheight + ("⁰f")
    }
}

const format = document.querySelector("button")

format.addEventListener("click", reset_all)

function reset_all(){
    document.querySelector(".farenheight").innerHTML =   0 + ("⁰c")
    document.querySelector(".celcius").innerHTML = 0 + ("⁰f")
}