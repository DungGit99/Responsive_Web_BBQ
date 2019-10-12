$(document).ready(function () {
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')

    })
    $(window).scroll(function(){
        let position = $(this).scrollTop();
        console.log(position);
        if(position>100){
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        }
        else{
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    })
    // smooth scroll
    $('.nav-item a,.header-link,#back-to-top').click(function(link){
        link.preventDefault();
        let target = $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop:$(target).offset().top -100
        },3000);
        
    })
    // $(".info,#header").ripples({
    //     dropRadius: 10,
    //     perturbance: 0.01,
    // });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});

