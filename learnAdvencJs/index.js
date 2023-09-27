let input = document.getElementById("input")
let div_1 = document.getElementById("div-1")
let div_2 = document.getElementById("div-2")
let div_3 = document.getElementById("div-3")


const updateDebounceText = debounce((text) => {
    div_2.textContent = text
})
const updateThrottleText = throttle((text) => {
    div_3.textContent = text
})

input.addEventListener('input',(e)=>{
    div_1.textContent = e.target.value;
    updateDebounceText(e.target.value);
    updateThrottleText(e.target.value);
})

function debounce(cb,debly =1000){
    let TimeOut;
    return(...args)=>{
      clearTimeout(TimeOut);
       TimeOut = setTimeout(()=>{
            cb(...args)
        },debly)
    }
}
function throttle(cb,debly = 1000){
    let sholdWait = false;
    return (...args)=>{
        if(sholdWait) return
        cb(...args)
        sholdWait = true
        setTimeout(()=>{
            sholdWait = false
        },debly)
    }
}
