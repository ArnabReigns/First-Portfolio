//plug-in register
gsap.registerPlugin(ScrollTrigger);

firstContainerAnimations()
secondContainerAnimations()
thirdContainerAnimations()

  

//first-container animations

function firstContainerAnimations()
{
    gsap.from('#name',{
    
        x:'-20rem',
        duration:'1.5',
        ease: 'power3.out',
        
        
    })
    gsap.fromTo('#name',
    {
        opacity:0
    },
    {

        opacity:1,
        duration:'1.5',
        ease: 'power3.out',
        delay:0.1,
    })


    gsap.from('#para',{

        y:'7rem',
        duration:'1',
        ease: 'power2.inOut',
        delay:0.4,
    })

    gsap.fromTo('#para',{

        opacity:0,
    },
    {

        opacity:1,
        duration:'1.5',
        ease: 'power3.out',
        delay:0.4,
    })

    gsap.from('.fab',{
        opacity:'0',
        duration:'2',
        delay:'1.2'
    
    })
    gsap.from('#lot',
    {
        duration:'2',
        opacity:'0',
        delay:'1.2',

    })  


    
}

//second container animations
function secondContainerAnimations()
{

    function secondContainerToggled()
    {
        document.body.classList.toggle('redScrollbar')
    }

    LottieInteractivity.create({
        mode: 'scroll',
        player: '#secondLottie',
        
        actions: [
            {
    
            
            visibility: [0,1],
            type: 'seek',
            frames: [0, 60],
            },
        ],
        });


    

    gsap.from('#secondLottie',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            toggleActions:'play complete pause reset',
        },
        duration:'0.7',
        x:'-100px',
        opacity:'0',
        ease:Power4.easeOut,
        
    })
    gsap.from('#helloThere',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            // markers:true,
            toggleActions:'play complete resume reset'
        },
        duration:'0.5',
        x:'200px',
        opacity:'0',
        ease:Power4.easeOut,
        
    })
    gsap.from('#aboutDes',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            toggleActions:'play complete resume reset'
        },
        duration:'0.5',
        delay:'0.3',
        y:'100px',
        opacity:'0',
        ease:Power4.easeOut,
        
    })

    gsap.from('.nested-grid',
    {
        scrollTrigger:
        {
            trigger:'.grid-container',
            start:'20px bottom',
            end:'bottom 20px',
            // markers:true,
            toggleActions:'play complete resume reset'
        },
        duration:'0.5',
        delay:'1.2',
        scale:'0',
        opacity:'0',
        ease:Power4.easeOut,
    })

    gsap.from('.grid-container',
    {
        scrollTrigger:
        {
            trigger:'.grid-container',
            start:'20px bottom',
            end:'bottom 20px',
            // markers:true,
            toggleActions:'play complete resume reset'
        },
        duration:'1',
        delay:'1',
        opacity:0,
        ease:Power4.easeOut,
    })

    gsap.from('#skills',
    {
        scrollTrigger:
        {
            trigger:'.grid-container',
            start:'20px bottom',
            end:'bottom 20px',
            // markers:true,
            toggleActions:'play complete resume reset'
        },
        duration:'1',
        delay:'0.3',
        opacity:0,
        width:'0px',
        
        ease:Power4.easeOut,
    })

    ScrollTrigger.create({
        trigger: ".second-container",
        start: "top center",
        end: "bottom center",
        onToggle: self => {
            secondContainerToggled()
        },
        // onUpdate: self => {
        //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        // }
      });
}

function thirdContainerAnimations()
{
    function thirdContainerToggled()
    {
        document.body.classList.toggle('blueScrollbar')
    }

    ScrollTrigger.create({
        trigger: ".third-container",
        start: "top center",
        end: "bottom center",
        onToggle: self => {
            thirdContainerToggled()
        },
        // onUpdate: self => {
        //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        // }
      });
}
