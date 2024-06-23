gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width:window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").getElementsByClassName.transform ? "transform" : "fixed"
});



gsap.to(".arrow i",{
    rotate:90,
    duration:0.2,
    scrollTrigger:{
        trigger:".arrow i",
        scroller:"#main",
        
        start:"top 0%",
        scrub:1
        
    }
})

gsap.to(".animated-name h1",{
    transform: "translateX(-150%)",
    scrollTrigger:{
        trigger:".animated-name",
        scroller:"#main",
        
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
        scroller:"#main",
        start:"top 70%",
        
    }
})

gsap.from(".more-about-me",{
    y:80,
    opacity:0,
    scrollTrigger:{
        trigger:".more-about-me",
        scroller:"#main",
        

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
        scroller:"#main",
        

        start:"top 50%",
    }
})


gsap.from(".development h3",{
    delay:0.3,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".development h3",
        scroller:"#main",
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
        scroller:"#main",
        start:"top 90%",
    }
})

gsap.from(" .development #designing",{
    opacity:0,
    duration:1.5
})

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();







