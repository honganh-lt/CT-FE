
$(document).ready(function(){
    $('.category-items').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      swipe:true,
      customPaging:
        function(slick,index) {
        return '<a>' + (index + 1) + '</a>'; },
    })
  });