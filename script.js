var crsr =document.getElementById("cursor")
var blur =document.getElementById("cursor-blur")
document.addEventListener("mousemove", function(e) {
   
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
    blur.style.left = e.x - 250 + "px";
    blur.style.top = e.y -250 + "px";
    
})

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})