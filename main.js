const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


// REMOVE MENU MOBILE
// khai báo 1 biến navLink và gán cho nó danh sách tất cả các phần tử có lớp là nav__link
const navLink = document.querySelectorAll('.nav__link')
// Khai báo 1 hàm có tên là linkAction. Hàm này không nhận tham số và thực hiện 1 số hành động
// Trong trường hợp này, nó sẽ loại bỏ lớp show-menu khỏi phần tử có id là nav-menu
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
// navLink.forEach(n => n.addEventListener('click', linkAction)):
//  Dòng này sử dụng phương thức forEach để duyệt qua từng phần tử trong danh 
// sách navLink. Đối với mỗi phần tử, nó gắn một sự kiện lắng nghe 'click' 
// và liên kết nó với hàm linkAction. Điều này có nghĩa là khi người dùng nhấp chuột vào các phần tử có lớp CSS 'nav__link',
//  hàm linkAction sẽ được gọi để thực hiện việc loại bỏ lớp 'show-menu' khỏi phần tử có id là 'nav-menu'.

navLink.forEach(n => n.addEventListener('click', linkAction))



let swiperHome = new Swiper('.home__swiper', {
    // tùy chọn này cho phép slideshow của chúng ta lặp lại vô hạn
    loop: true ,
    // tùy chọn này giúp con chỏ truột của bạn khi cuốn slideshow thì sẽ thành hình bàn tay
    grabCursor: true,
    // swiper sẽ tự động tính toán số liệu slide trên mỗi trang
    slidesPerView: 'auto',
    // đây là các nút điều hướng
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',                
    }, 


// breakpoints là một giá trị chiều rộng cụ thể, mà tại đó kiểu dáng của trang web được điều chỉnh
    breakpoints:{

//768 pixels: Đây là một breakpoint được đặt tại chiều rộng màn hình 768 pixels. Khi màn hình có chiều rộng bằng hoặc lớn hơn 768 pixels, 
//swiper sẽ hiển thị 3 slide cùng một lúc và tự động căn giữa chúng.
        768:{
            slidesPerView: 3,
            centeredSlides: 'auto',
        },
// đây là một breakpoint được đặt tài chiều rộng màn hình 1152. khi màn hình có chiều rộng bằng hoặc lớn hơn 1152
// swiper sẽ tự động căn giữa slide tự động và tạo khoảng cách giữa chúng là 64px
        1152:{
            centeredSlides: 'auto',
            spaceBetween: -64,
        } 
    }
})


// CHANGE BACKGROUND-HEADER

const backgroundHeader = () =>{
     const header = document.getElementById('header')
     if(window.scrollY >= 30){
        header.classList.add('bg-header')
     }

     else{
        header.classList.remove('bg-header')
     }
}

window.addEventListener('scroll', backgroundHeader)



// SCROLLL-ANIMATION

const sr = ScrollReveal({
    /* chỉ định hướng mà các phần tử sẽ được hiển thị. trong trường hợp này, các phần tử
    sẽ được hiển thị từ trên xuống*/
    origin: 'top',

    /*  chỉ định hướng mà các phần tử sẽ được hiển thị. trong trường hợp này, 
    các phần tử sẽ được hiển thị từ trên xuống
    */
    distance: '60px',

     /*thời gian hoạt ảnh xuất hiện là 2,5 giây*/ 
    duration: 2000,
})

sr.reveal('.home__swiper, .home__footer')
sr.reveal('.home__circle', {scale: 1.5, delay: 300})
sr.reveal('.home__subcircle', {scale: 1.5, delay: 500})    
sr.reveal('.home__title', {scale:1, origin: 'bottom', delay: 1200})
sr.reveal('.swiper-button-prev,.swiper-button-next', {origin: 'bottom'})