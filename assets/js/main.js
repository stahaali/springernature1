$('.toggle').click(function()
{
    $('.menu-list').toggleClass('show');
});

$(document).ready(function() {
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
});
