
// window.alert("Welcome")

//  menu icon
 document.querySelector("nav .menu").onclick = function () {
  document.querySelector("div").classList.add(`nwn`);
  document.querySelector("header").style.overflow=`visible`;
  document.querySelector("nav .menu").style.display="none";
  document.querySelector("nav .left").style.display="block";
  }


    //  dark mode 
  document.querySelector("nav .moon").onclick = function () {
    document.querySelector("body").classList.add(`dark`);
    document.querySelector("i").classList.add(`color-white`);
    document.querySelector("nav").classList.add(`dark`);
    document.querySelector("nav ul li a").classList.add(`dark`);
    document.querySelector("header h1").classList.add(`color-black`);
    document.querySelector("header span").classList.add(`dark`);
    document.querySelector("nav .moon").style.display="none";
    document.querySelector("nav .sun").style.display="block";
    }
   
    // light mode
    document.querySelector("nav .sun").onclick = function () {
        document.querySelector("body").classList.remove(`dark`);
        document.querySelector("i").classList.remove(`color-white`);
        document.querySelector("nav").classList.remove(`dark`);
        document.querySelector("nav ul li a").classList.remove(`dark`);
        document.querySelector("header h1").classList.remove(`color-black`);
        document.querySelector("header span").classList.remove(`dark`);
        document.querySelector("nav .sun").style.display="none";
        document.querySelector("nav .moon").style.display="block";
        }

  // close icon

  document.querySelector("nav .left").onclick = function () {
    document.querySelector("div").classList.remove(`nwn`);
    document.querySelector("header").style.overflow=`hidden`;
    document.querySelector("nav .menu").style.display="block";
    document.querySelector("nav .left").style.display="none"
    }
  

       





//   swiper

// const swiper = new Swiper('.swiper', {

    // Optional parameters

    // direction: 'vertical',
    // loop: true,
  
    // If we need pagination

    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar

    // scrollbar: {
    //    el: '.swiper-scrollbar',
    //  },

  //    slidesPerView: 1,
  //    spaceBetween: 10,
  //    pagination: {
  //      el: '.swiper-pagination',
  //      clickable: true
  //    },
  // });
 
    
