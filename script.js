  
  
  var crsr = document.querySelector("#cursor")
  var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){

    crsr.style.left= dets.x+"px"
    crsr.style.top = dets.y+"px"
    
    crsr_blur.style.left= dets.x-150+"px"
    crsr_blur.style.top = dets.y-150+"px"
})

var h3All = document.querySelectorAll("#nave h3")

    h3All.forEach(function(elem){

        elem.addEventListener("mouseenter", function(){
crsr.style.scale=3
crsr.style.border="1px solid #0fff"
crsr.style.backgroundColor="transparent"
        })
   

   

    elem.addEventListener("mouseleave", function(){

        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
crsr.style.backgroundColor="#95C11E"

    })

})







gsap.to("#nave",{
    backgroundColor:"#000",
height:"110px",
duration:0.5,


scrollTrigger:{

    tirgger:"#nave",
    scroller:"body",
    
    start:"top -10%",
    end:"top -11%",
    scrub:1

}
})


gsap.to("#main",{

    backgroundColor:"#000",

    scrollTrigger:{

        tirgger:"#main",
        scroller:"body",
       start:"top -30%",
       end:"top -70%",
        scrub:2
    }

})



gsap.from("#about-us img,#about-us-in" ,{

    y:50,       //it means y axis se element ayega
    opacity:0,  // it means visibility   means, initialy opacity rahega 0 
    duration:1, //it use to set time duration
     stagger:0.4,    // element ko ek ek karke chalane ka kam karta hai stagger
    scrollTrigger:{

        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3

       }
})


gsap.from("#cards-container",{

    scale:0.8,   
    opacity:0,  // it means visibility   means, initialy opacity rahega 0 
    duration:1, //it use to set time duration
     stagger:0.4,    // element ko ek ek karke chalane ka kam karta hai stagger
    scrollTrigger:{

        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3

       }
})

gsap.from("#colon1",{

    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})



gsap.from("#colon2",{

    y:60,
    x:60,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1",{
      
    y:50,
    
    scrollTrigger:{

        trigger:"#page4 h1",
        scroller:"body",

        start:"top 75%",
        end:"top 70%",
        scrub:3

    }


})






