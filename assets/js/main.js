
$(document).ready(function() 
{
    $('.toggle').click(function()
    {
        $('.menu-list').toggleClass('show');
    });

    $(".content").hide().slice(0, 3).show();
    $('.minusicon').hide();
    $('.load-button a').click(function(e) {
        e.preventDefault();

        if ($(".content:hidden").length > 0) {
            $(".content:hidden").slice(0, 3).slideDown();
            if ($(".content:hidden").length === 0) 
                {
                $('.plusicon').hide();
                $('.minusicon').show();
                $(this).html('<i class="fa-solid fa-minus minusicon"></i> Show Less');
            }
        } else 
        {
            $('.plusicon').show();
            $(".content").slice(3).slideUp();
            $(this).html('<i class="fa-solid fa-plus plusicon"></i> Show More');
        }
    });

    
    $('.toggle2').click(function() 
    {
        $('.collapse-menu2').toggleClass('show');

        $('.toggle3').toggleClass('show4');

        if ($('.collapse-menu2').hasClass('show')) 
        {
            $('.mobile-menu').addClass('fixed-menu');
        } 
        else 
        {
            $('.mobile-menu').removeClass('fixed-menu');
        }
    });

    $('.angledown').click(function()
    {
        $('.menu-list2').toggleClass('show2');
    });

});
