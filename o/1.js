let lil = gsap.timeline()

lil.from('nav img, .nav3',{
    y:-100,
    duration: 1,
    delay:0.3,
    opacity:0
})

lil.from('.nav2 a',{
    x:100,
    duration: 0.3,
    stagger:0.4,
    opacity:0
})


lil.from('.main h1',{
    y:100,
    stagger:0.5,
    opacity:0
})

lil.from('.main .left-img',{
    y:100,
    duration: 0.3,
    stagger:0.5,
    opacity:0,
})

lil.from('.main .right-img',{
    x:-100,
    duration: 0.3,
    stagger:0.5,
    opacity:0
})


lil.from('h5',{
    scale:0,
    opacity:0
})

lil.to('h5',{
    y: 30,
    duration:0.5,
    repeat:-1,
    yoyo:true
})

lil.from('.fst-img img, .fst-img p',{
    x:-100,
    duration: 0.5,
    opacity:0,
    stagger:0.5,
    
    scrollTrigger:{
        trigger:'.fst-img img, .fst-img p',

    }
})

lil.from('.scn-img img, .scn-img p',{
    y:100,
    duration: 0.5,
    opacity:0,
    stagger:0.5
})