// 创建一个闭包
(function($) {
  $.fn.showDialog = function(options) {
    $('body').css("overflow","hidden");
    var opts = $.extend( {}, $.fn.showDialog.defaults, options);
    $this = $(this);
    var o = $.meta ? $.extend( {}, opts, $this.data()) : opts;
    var u=o.u;
    var isScroll=o.isScroll;
    $.ajax({
        url: u,
        dataType: "html",
        success:function(data){
          $this.html(data);
          $this.find(".m-float-nav").show(0,function(){
            $this.find(".m-float-nav").find("dl").animate({"width":"100%"},200);
            $('body').css("overflow","hidden");
            if(isScroll){
             var myIscroll = new iScroll("scroll",{checkDOMChanges:true});
            }
          });
          $("#float-nav-close,#float-backdrop").click(function() {
            $('body').css("overflow","scroll");
            $("#float-nav>dl").animate({"width":"0%"},200,function(){
              $("#float-nav").hide(0);
              $this.empty();
            })
            $('#carousel-top').carousel('cycle').find('.carousel-indicators').show();

          });
          }
      });
  };

  // 动态增加的defaults
  $.fn.showDialog.defaults = {
    u : 'index.html',
    isScroll:false
  };

  // 闭包结束
})(jQuery);
