$(document).ready(function () {
   // Smooth Scrolling
   $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top - 105
               }, 800);
               return false;
            }
         }
      });
   });

   //Go To Top
   $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
         $('#pageTop').fadeIn();
      } else {
         $('#pageTop').fadeOut();
      }
   });

   $('#pageTop').click(function () {
      $("html, body").animate({
         scrollTop: 0
      }, 600);
      return false;
   });


   // Menu Responsive
   var pull = $('#mobileMenu');
   menu = $('#navigation .menu');
   branding = $('.site-branding');

   $(pull).on('click', function (e) {
      e.preventDefault();
      menu.fadeToggle('');
   });

   $(window).resize(function () {
      var w = $(window).width();
      if (w > 700 && menu.is(':hidden')) {
         menu.removeAttr('style');
      }
   });

   // Slick Slider
   $('.slick').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
   });

   function activeTab(obj) {
      $('.tab-wrapper ul li').removeClass('active');
      $(obj).addClass('active');
      var id = $(obj).find('a').attr('href');
      $('.tab-item').hide();
      $(id).show();
   }

   $('.tab li').hover(function () {
      activeTab(this);
      return false;
   });
   activeTab($('.tab li:first-child'));
});