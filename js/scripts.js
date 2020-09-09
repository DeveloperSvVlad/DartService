
// Функция которая проверяет может ли браузер отобразить формат webp, если может, то функция добавляет к селектору body класс webp
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
 testWebP(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});


const $skrollUp = document.getElementById('buttonUp');

$skrollUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.onscroll = () => {scrollFunction()};

    const scrollFunction = () => {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            $skrollUp.style.display = "block";
        } else {
            $skrollUp.style.display = "none";
        }
    }




var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction:'vertical',
    slidesPerView: 2,
    autoHeight: true,
    speed: 2000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

const $title = document.querySelectorAll('.accordion__title');
const $bodies = document.querySelectorAll('.accordion__body');

    function closeAll() {
        $bodies.forEach((el) => {
            el.classList.remove('accordion__body--active');
        });
    }

    function openItem(index) {
        $bodies[index].classList.add('accordion__body--active');
    }
    
    $title.forEach((elem, i) => {
        elem.addEventListener('click', () =>{
            closeAll();
            openItem(i);
        })
    })

const $body = document.querySelector('body'),
      $menuButton = document.querySelector('.header__burger'),
      $menu = document.querySelector('.menu__list'),
      $menuLinks = document.querySelectorAll('.menu__list-link')
      
$menuButton.addEventListener('click', () => {
    $menuButton.classList.toggle('header__burger-active');
    $menu.classList.toggle('menu__list-active');
    $body.classList.toggle('lock');

        for (let menuItems of $menuLinks){
            menuItems.addEventListener('click', () => {
                $menuButton.classList.remove('header__burger-active');
                $menu.classList.remove('menu__list-active');
                $body.classList.remove('lock');
            })
        }
});

$menuLinks.forEach((elem) => {
    elem.addEventListener('click', () => {
        let href = elem.getAttribute('href').substr(1);
        event.preventDefault();
        document.getElementById(`${href}`).scrollIntoView({ block: "start", behavior: "smooth" });
    });
});