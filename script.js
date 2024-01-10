$('#anim').textillate({ in: { effect: 'fadeInUp', delay: 100 } });

const tl = new gsap.timeline();

tl.from('.lrow a', {
    stagger: .2,
    opacity: 0,
    x: 10,
})
.from('#text .anm', {
    stagger: .2,
    opacity: 0,
    x: 10,
}, '-=1')
.from('#hero img', {

    opacity: 0,
    y: 20,
    duration: 2,
    ease: 'Expo.easeInOut'
}, '-=1.5')