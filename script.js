
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/66f656c1e5982d6c7bb564ae/1i8p45pht';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
function loadingAnimation() {
    gsap.from("#content h1", {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        stagger: 0.2,
    });
    gsap.from("#content img", {
        y: 100,
        opacity: 0,
        delay: 1,
        duration: 0.5,
    });
}

loadingAnimation(); 
