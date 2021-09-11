$(function () {
  // declare global variable
  var $body = null;
  var $burger = null;
  var $gnb = null;
  var $gnb_item = null;
  var tl_nav_show = null;
  var isOnTop = false;

  // Initialize the element to be used globally
  function init() {
    $body = $("body");
    $burger = $(".menu");
    $gnb = $(".gnb");
    $gnb_item = $(".menu_item");

    tl_nav_show = new TimelineLite({ paused: true, reversed: true });
  }

  function timeline_nav() {
    var $nav = $(".nav");
    var $menu = {
      item_1: $nav.children().eq(0),
      item_2: $nav.children().eq(1),
      item_3: $nav.children().eq(2),
    };
    var $contact = $nav.next();

    tl_nav_show
      .addLabel("menuOpen")
      .staggerFrom(
        // show the navigation list
        [$menu.item_1, $menu.item_2, $menu.item_3], //each item and order
        0.7,
        { opacity: 0, top: 20 },
        0.2,
        "menuOpen+=0.4"
      )
      .addLabel("menuShow")
      .from($contact, 0.5, { opacity: 0 }, "menuShow-=0.32");
  }

  function openBurgerMenu() {
    $gnb.addClass("open");
    $burger.addClass("open");
    if ($burger.hasClass("onTop") == true) {
      isOnTop = true;
      $burger.removeClass("onTop");
    }
    tl_nav_show.play().timeScale(1);
    $gnb.addClass("open");
    preventScroll();

    function preventScroll() {
      $("html").addClass("no_scroll");
      $(".wrap").css({ "margin-right": scrollBarWidth() });
      $(".footer").css({ width: "calc(100% - " + scrollBarWidth() + "px)" });
      $(".menu").css({ right: "+=" + scrollBarWidth() });
    }

    function scrollBarWidth() {
      document.body.style.overflow = "hidden";
      var width = document.body.clientWidth;

      document.body.style.overflow = "scroll";
      width -= document.body.clientWidth;

      if (!width) width = document.body.offsetWidth - document.body.clientWidth;

      document.body.style.overflow = "";

      return width;
    }
  }

  function closeBurgerMenu() {
    function allowScroll() {
      $(".wrap, .menu, .footer").removeAttr("style");
      $("html").removeClass("no_scroll");
    }

    $burger.removeClass("open");

    tl_nav_show.reverse().timeScale(1.8);

    setTimeout(function () {
      $gnb.removeClass("open");

      if (isOnTop == true) {
        isOnTop = false;
        $burger.addClass("onTop");
      }
    }, 300);

    setTimeout(function () {
      allowScroll();
    }, 520);
  }

  function initEvent() {
    $gnb.show();

    timeline_nav();

    $burger.on("click", function (evt) {
      evt.preventDefault();

      tl_nav_show.reversed() ? openBurgerMenu() : closeBurgerMenu();

      if (!$gnb.hasClass("open")) {
        $burger.removeClass("open");
      }
    });

    $gnb_item.on("click", function (evt) {
      var href = $(this).children("a").attr("href");
      console.log(href);
      evt.preventDefault();
      closeBurgerMenu();
      setTimeout(function () {
        window.location.href = href;
      }, 600);
    });
  }

  $(window).on("load", function () {
    init();
    initEvent();
  });
});
