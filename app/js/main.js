$(function () {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "15px",
    });

    $('.featured__slider').slick({
        nextArrow:'<button class="slick-arrow slick-next"><img src="images/featured/chevron-right.png" alt=""></img></button>',
        prevArrow:' <button class="slick-arrow slick-prev"><img src="images/featured/chevron-left.png" alt=""></img></button>',
        slidesToShow:1,
        slidesToScroll:1
    });

});
