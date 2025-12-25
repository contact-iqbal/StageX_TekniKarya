export function initDark(){
    const toggle = document.querySelector(".dark-mode-toggle")
    const iconWrapper = document.getElementById("iconWrapper")
    const text = document.querySelector(".theme-text")
    const moon = document.querySelector("#moon")
    const sun = document.querySelector("#sun")
    let isDark = false

    function showMoon() {
        moon.classList.remove("opacity-0")
        moon.classList.add("opacity-100")
        sun.classList.remove("opacity-100")
        sun.classList.add("opacity-0")
    }

    function showSun() {
        moon.classList.remove("opacity-100")
        moon.classList.add("opacity-0")
        sun.classList.remove("opacity-0")
        sun.classList.add("opacity-100")
    }
    
    toggle.addEventListener("click", ()=>{
        if(!isDark){
            isDark = true
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
            iconWrapper.classList.add("left-25")
            iconWrapper.classList.remove("left-1")
            text.classList.add("opacity-0")
            text.classList.remove("opacity-100")
            showSun()
            console.log(sun.className)
            setTimeout(()=>{
                toggle.classList.remove("flex-row")
                toggle.classList.add("flex-row-reverse")
                text.classList.remove("opacity-0")
                text.classList.add("opacity-100")
                text.textContent = 'Light Mode'
            }, 500)
        }else{
            isDark = false
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
            iconWrapper.classList.remove("left-25")
            iconWrapper.classList.add("left-1")
            text.classList.add("opacity-0")
            text.classList.remove("opacity-100")
            showMoon()
            console.log(sun.className)
            setTimeout(()=>{
                toggle.classList.remove("flex-row-reverse")
                toggle.classList.add("flex-row")
                text.classList.remove("opacity-0")
                text.classList.add("opacity-100")
                text.textContent = 'Dark Mode'
            }, 500)
        }
    })
}