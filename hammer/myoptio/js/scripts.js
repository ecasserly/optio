$(document).ready(function() {

    //jQuery smoothScroll
    $('a').smoothScroll();
    window.addEventListener('scroll', function() {});

    //jQuery Fixed Nav
    var mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('header').height();

    $(window).scroll(function() {
        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
    });

    // Tabs
    $('#tab-nav').children('li').first().children('a').addClass('active')
        .next().addClass('tab-open').show();

    $('#tab-nav').on('click', 'li > a', function() {

        if (!$(this).hasClass('active')) {

            $('#tab-nav .tab-open').removeClass('tab-open').hide();
            $(this).next().toggleClass('tab-open').toggle();

            $('#tab-nav').find('.active').removeClass('active');
            $(this).addClass('active');
            return false;
        } else {
            return false;
        }
    });

    // Accordian
    function newAccordion(el) {
        el.addClass('accordion');
        $('.accordion > div').addClass('hidden');

        el.find('h3').click(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).next().slideUp();
            } else {
                el.find('h3').removeClass('active');
                $('.accordion > div').slideUp();
                $(this).toggleClass('active');
                $(this).next().slideToggle();
            }
            return false;
        });
    }

    newAccordion($('#accordion'));
    newAccordion($('#accordion-2'));
    newAccordion($('.multi-accordion'));

    // Sticky Footer
    $(document).ready(function() {
        $(window).resize(function() {
            var footerHeight = $('.footer').outerHeight();
            var stickFooterPush = $('.push').height(footerHeight);

            $('.wrapper').css({ 'marginBottom': '-' + footerHeight + 'px' });
        });

        $(window).resize();
    });

});