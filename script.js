$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

  //   Theme toggle
    const themeToggle = $('.theme-toggle');
     themeToggle.click(function(){
       $('body').toggleClass('dark-mode');
        });
        initSkillsBars();
});


// Fungsi untuk animasi progress bar pada section skills
function initSkillsBars(){
   const skillBars =  $('.skills .skills-content .right .bars');

     skillBars.each(function(){
         $(this).hover(function(){
          const circle = $(this).find('svg circle')
            circle.css('stroke-dashoffset', 0);
          });
        });
}


//Load More Button
  function createCard(index) {
        const card = $('<div class="card">' +
          '<div class="box">' +
            '<i class="fas fa-star"></i>' +
            '<div class="text">Skill ' + index + '</div>' +
            '<p>Description for skill ' + index + '</p>' +
         '</div>'+
        '</div>');
         card.css('opacity', 0).animate({opacity: 1}, 400);
        return card;
    }
        let cardIndex = 4;
  $('.load-more-btn').click(function() {
         const btn = $(this);
         if (btn.hasClass('loading')) return;

           btn.addClass('loading').find('.dots').html('<span></span><span></span><span></span>');

          setTimeout(function() {
             btn.removeClass('loading').find('.dots').html('');
          for (let i = 0; i < 3; i++) {
               $('.services .serv-content').append(createCard(cardIndex++));
           }
         }, 1000);
        });