gsap.to(".arrow i",{
    rotate:90,
    duration:0.2,
    scrollTrigger:{
        trigger:".arrow i",
        scroller:"body",
        
        start:"top 0%",
        scrub:1
        
    }
})

gsap.to(".animated-name h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:".animated-name",
        scroller:"body",
        
        start:"top 66.7%",
        end:"top -100%",
        scrub:2
    }
})

gsap.from("#hii",{
    y:100,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#hii",
        scroller:"body",
        start:"top 70%",
        
    }
})

gsap.from(".more-about-me",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:".more-about-me",
        scroller:"body",
        

        start:"top 75%",
        
    }
})

gsap.from(".more-about-me2 h1",{
    duration:1,
    x:80,
    opacity:0,
    stagger:0.2,
    ease:"back.out",
    scrollTrigger:{
        trigger:".more-about-me2",
        scroller:"body",
        

        start:"top 50%",
    }
})


gsap.from(".development h3",{
    delay:0.3,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".development h3",
        scroller:"body",
        start:"top 90%",
    }
})




gsap.from(".elem-div img",{
    y:20,
    delay:0.3,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"back.out",
    scrollTrigger:{
        trigger:".elem-div img",
        scroller:"body",
        start:"top 90%",
    }
})

gsap.from(" .development #designing",{
    opacity:0,
    duration:1.5
})







