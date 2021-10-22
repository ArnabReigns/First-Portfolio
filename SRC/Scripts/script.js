//plug-in register
gsap.registerPlugin(ScrollTrigger);

//main
firstContainerAnimations()
secondContainerAnimations()
thirdContainerAnimations()

  


//defined functions

function firstContainerAnimations()
{
    //entry animations

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

function secondContainerAnimations()
{

    //entry animations

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
        duration:'1',
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
        duration:'0.8',
        delay:'0.5',
        y:'100px',
        opacity:'0',
        ease:Power4.easeOut,
        
    })

    gsap.from('.nested-grid',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            toggleActions:'play complete resume reset'
        },
        duration:'0.8',
        delay:'1.1',
        scale:'0',
        opacity:'0',
        ease:Power4.easeOut,
    })

    gsap.from('.grid-container',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            toggleActions:'play complete resume reset'
        },
        duration:'1',
        delay:'1',
        opacity:0,
        ease:Power4.easeOut,
    })

    gsap.to('#skills',
        {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            toggleActions:'play complete resume reset'
        },
        duration:'1',
        delay:'0.8',
        opacity:1,
        width:'100%',
        
        ease:Power4.easeOut,
        })
        

    gsap.to('.about-img',
    {
        scrollTrigger:
        {
            trigger:'.second-container',
            start:'50px bottom',
            end:'bottom 20px',
            // markers:true,
            toggleActions:'play complete resume reset'
        },
        duration:'1',
        delay:'1',
        // width:'10rem',
        flex:'1',
        opacity:'1',
        ease:Power4.easeOut,
        
    })

    // class toggle - for scrollbar color change

    ScrollTrigger.create({
        trigger: ".second-container",
        start: "top center",
        end: "bottom center",
        onToggle: () => {
            
            document.body.classList.toggle('redScrollbar');
        }
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
