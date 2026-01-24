export function initDark(){
    const toggle = document.getElementById("darkToggle")
    if(!toggle) return
    const sun = document.querySelector("#darkToggle #sun")
    if(!sun) return
    const moon = document.querySelector("#darkToggle #moon")
    if(!moon) return

    let isDark = false

    toggle.addEventListener("click", ()=>{
        if(!isDark){
            isDark = true
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
            sun.classList.remove("opacity-100")
            sun.classList.add("opacity-0")
            
            moon.classList.remove("opacity-0")
            moon.classList.add("opacity-100")
        }else{
            isDark = false
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
            sun.classList.add("opacity-100")
            sun.classList.remove("opacity-0")
            
            moon.classList.add("opacity-0")
            moon.classList.remove("opacity-100")
        }
    })
}