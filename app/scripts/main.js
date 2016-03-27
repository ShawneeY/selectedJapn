/// 创建一个闭包


(function($) {

  //Touch Side initiating js


 // 定制行程
  $("#consultation").click(function() {
    $('#consultation_service').showDialog({
      'u' : 'common/getConsultationService',
      'isScroll':true
    });
  });

  //owl carousel
  $('.loop').owlCarousel({
    autoplay: 3000,
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      1200: {
        items: 3
      }
    }
  });

  $("#slide-img").owlCarousel({
       autoplay: true,
       autoplayTimeout:3000,
       loop:true,
       items: 1
  });

  //initiate toggle outta box boostrap

  $('.collapse').collapse()

  // check box

  $('.icheckbox_square-red').click(function(){
    $(this).toggleClass('checked');
  })


  // 闭包结束
})(jQuery);