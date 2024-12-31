
        /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

        /* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

        /* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// remove menu mobile
const navLink = document.querySelectorAll('.nav_link')

const linkaction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkaction))

// add shadow header
    const shadowHeader = ()=>{
        const header = document.getElementById('header')
        this.scrollY >= 50 ? header.classList.add('shadow-header')
                            : header.classList.remove('shadow-header')
     }
     window.addEventListener('scroll', shadowHeader)
   
     // swiper popular
const swiperPopular = new Swiper('.popular_swiper', {
        loop: true,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: 'auto',
       })
  

// show scroll up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// scroll sections active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    // reset: true, //Animations repeat
})

sr.reveal(`.home_data, .popular_container, .footer`)
sr.reveal(`.home_board`, {delay: 700, distance: '100px', origin: 'right'})
sr.reveal(`.home_pizza`, {delay: 1400, distance: '100px', origin: 'bottom', rotate: {z: -90}})
sr.reveal(`.home_ingredient`, {delay: 2000, interval: 100})
sr.reveal(`.about_data, .recipe_list, .contact_data`, {origin: 'right'})
sr.reveal(`.about_img, .recipe_img, .contact_image`, {origin: 'right'})
sr.reveal(`.products_card`,{interval: 100})
