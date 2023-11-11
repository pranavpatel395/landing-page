


var cr = document.querySelector("#cursor");
var crblur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x+-10+"px";
    cr.style.top = dets.y+-10+"px";
    crblur.style.left = dets.x+ -100 +"px";
    crblur.style.top = dets.y+ -100 +"px";
})


  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "70px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
    //   markers: true,
      start: "top -10%",
      end: "top -11%",
      scrub: 2,
    },
  });

  gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger : "#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub: 2,
    }
  })

  gsap.from("#about img, #about-in", {
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger :{
      trigger:"#about",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 64%",
      scrub:3
    }
  })

  gsap.from(".card", {
    scale :0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger :{
      trigger:".card",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:1
    }
  })

  gsap.from("#colon1", { 
    y:-70,
    x:-70,
    // stagger:0.4,
    scrollTrigger :{
      trigger:"#colon1",
      scroller:"body",
      start:"top 55%",
      end:"top 45%",
      scrub:4
    }
  })
  
  gsap.from("#colon2", { 
    y:70,
    x:70,
    // stagger:0.4,
    scrollTrigger :{
      trigger:"#colon1",
      scroller:"body",
      start:"top 55%",
      end:"top 45%",
      scrub:4
    }
  })