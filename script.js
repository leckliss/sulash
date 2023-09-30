const elements = document.querySelectorAll('.hidden')



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})


elements.forEach((element) => myObserver.observe(element) )


window.addEventListener("scroll", function() {
    var menu = document.querySelector('header');
    var logo = document.querySelector(".logo");

    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add("scrolled");
        logo.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
        logo.classList.remove("scrolled");
    }
});