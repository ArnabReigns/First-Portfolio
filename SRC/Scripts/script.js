//plug-in register
gsap.registerPlugin(ScrollTrigger);

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
});


firstContainerAnimations()
secondContainerAnimations()



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
            toggleActions:'play complete pause reset'
        },
        duration:'0.7',
        x:'-200px',
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
    

    // gsap.from('#aboutButton',
    // {
    //     scrollTrigger:
    //     {
    //         trigger:'.second-container',
    //         start:'50px bottom',
    //         end:'bottom 20px',
    //         toggleActions:'play complete resume reset'
    //     },
    //     duration:'2',
    //     // x:'100px',
    //     delay:'0.5',
    //     opacity:'0',
    //     ease:Power4.easeOut,
        
    // })
}


