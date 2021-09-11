/*footer.js*/
$(function () {
  $(window).on("load resize", function () {
    siteFooter();

    function siteFooter() {
      var siteContent = $(".contents");
      var siteContentHeight = siteContent.height();
      var siteContentWidth = siteContent.width();

      var siteFooter = $(".footer");
      var siteFooterHeight = siteFooter.height();
      var siteFooterWidth = siteFooter.width();

      siteContent.css({
        "margin-bottom": siteFooterHeight,
      });
    }
  });

  $(window).on("load resize", function () {
    // Give on class when scrolling more than 2/3 of the document
    var scrollBottom = 0;
    var bodyHeight = $(document).height();
    var scrollOverBodyHeight = (bodyHeight / 3) * 2;
    function toTop_or_toBottom() {
      scrollBottom = $(window).scrollTop() + $(window).height();
      if (scrollBottom >= scrollOverBodyHeight) {
        $(".footer").addClass("on");
      } else {
        $(".footer").removeClass("on");
      }
    }

    $(window).on("scroll", function () {
      toTop_or_toBottom();
    });
  });
});
