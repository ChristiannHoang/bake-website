$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    // margin: 10,
    // nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.counter').countUp();

// NAV
var nav = document.querySelector('.navbar__list');
var navList = nav.querySelectorAll('.navbar__item');

for (var i = 0; i < navList.length; i++) {
    navList[i].addEventListener('click', function() {
        // Tìm và xóa active đang hoạt động
        var current = document.querySelector('.navbar__list .navbar__item-link--avtive');
        current.className = current.className.replace('navbar__item-link--avtive', "");
        // Thêm active vào item được click
        var currentItem = this.querySelector('.navbar__item-link');
        currentItem.className += ' navbar__item-link--avtive';
    });
}