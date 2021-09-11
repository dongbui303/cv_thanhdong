/*common.js*/
$(function () {
  //Remove loading image
  function removeLoading() {
    $(".loading").fadeOut(800);
    //$(".loading").css({'z-index':'-100'});
  }

  // GNB generation function
  function gnbMaker() {
    var html = "";

    html += ' <div class="fixed"> ';
    html += ' <h1 class="logo"> ';
    html += ' <span class="text_hide">N의 포트폴리오</span> ';
    html += " <div> ";
    html +=
      ' <svg class="title_logo" enable-background="new 0 0 240 236" version="1.1" viewBox="0 0 100 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> ';
    html +=
      ' <polygon points="49 236 49 52.2 178.9 236 240 236 240 0 191 0 191 174.7 69.8 0 0 0 0 236" fill="#ffd40a"/> ';
    html += " </svg> ";
    html += " </div> ";
    html += " </h1> ";
    html += ' <div class="menu" role="button" tabindex="0"> ';
    html += ' <div class="menu_burger" tabindex="0"> ';
    html += ' <div class="line line_01"></div> ';
    html += ' <div class="line line_02"></div> ';
    html += ' <div class="line line_03"></div> ';
    html += " </div> ";
    html += " </div> ";
    html += " </div> ";
    html += ' <nav class="gnb" style="display:none"> ';
    html += ' <h2 class="text_hide">Navigation</h2> ';
    html += ' <ul class="nav"> ';
    html += ' <li class="menu_item"><a href="/">HOME.</a></li> ';
    html += ' <li class="menu_item menu_work"><a href="/#work">WORK.</a></li> ';
    html +=
      ' <li class="menu_item menu_about"><a href="../about.html">ABOUT.</a></li> ';
    html += " </ul> ";
    html += ' <div class="contact"> ';
    html += ' <a href="mailto:dongbui303@gmail.com" class="contact_link">  ';
    html += ' <span class="contact_heading">MAIL</span>    ';
    html += ' <span class="contact_info">dongbui303@gmail.com</span> ';
    html += " </a> ";
    html += ' <a href="tel:+84 987 800 662" class="contact_link"> ';
    html += ' <span class="contact_heading">PHONE</span>';
    html += ' <span class="contact_info">+84 987 800 662</span> ';
    html += " </a> ";
    html += ' <a href="https://github.com/dongbui303" class="contact_link"> ';
    html += ' <span class="contact_heading">GITHUB</span>  ';
    html += ' <span class="contact_info">Thanh Dong</span> ';
    html += " </a> ";
    html += " </div> ";
    html += " </nav> ";

    $(".header").append(html);
  }

  // Footer creation function
  function footerMaker() {
    var updateDay = "June 3rd";

    var html = "";

    html +=
      ' <h2 class="title footer_title">Let&acute;s start right Now!</h2> ';
    html +=
      ' <p class="footer_text">Ready to work. Please contact us at your convenience!</p> ';
    html += ' <address class="footer_address"> ';
    html +=
      ' <a href="mailto:dongbui303@gmail.com" class="footer_link link_mail"> ';
    html += ' <span class="icon_circle"></span> ';
    html += ' <span class="footer_link_text"></span> ';
    html += " </a> ";
    html += ' <a href="tel:+84 987 800 662" class="footer_link link_phone"> ';
    html += ' <span class="icon_circle"></span> ';
    html += ' <span class="footer_link_text"></span> ';
    html += " </a> ";
    html += " </address> ";
    html += ' <div class="footer_bottom"> ';
    html += ' <ul class="social"> ';
    html +=
      ' <li class="social_item social_blog"><a href="https://www.behance.net/dongthanh1" target="_blank">behance</a></li> ';
    html +=
      ' <li class="social_item social_codepen"><a href="https://www.linkedin.com/in/thanh-dong/" target="_blank">linkedin</a></li> ';
    html +=
      ' <li class="social_item social_github"><a href="https://github.com/dongbui303" target="_blank">github</a></li> ';
    html += " </ul> ";
    html += ' <p class="update">Last Updated On ' + updateDay + ", 2018</p> ";
    html += ' <p class="copyright">&copy; 2021 THANH DONG</p> ';
    html += " </div> ";

    $(".footer").append(html);
  }

  $(window).on("load", function () {
    setTimeout(function () {
      removeLoading();
    }, 100);

    gnbMaker();
    footerMaker();
  });

  console.log("Hello! :D");
});
$(function () {
  // global variable declaration
  var $body = null;
  var $burger = null;
  var $gnb = null;
  var $gnb_item = null;
  var tl_nav_show = null;
  var isOnTop = false;

  // Initializing an element for use globally
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
        //Show navigation list
        [$menu.item_1, $menu.item_2, $menu.item_3], //each item and order
        0.7, //duration
        { opacity: 0, top: 20 }, //animated movie
        0.2, //간격
        "menuOpen+=0.4"
      )
      .addLabel("menuShow")
      .from(
        //Show contact information at the bottom
        $contact, //Target
        0.5, //duration
        { opacity: 0 }, //animated movie
        "menuShow-=0.32" //time control
      );
  }

  function openBurgerMenu() {
    $gnb.addClass("open"); //Show GNB background
    $burger.addClass("open"); //change burger icon
    if ($burger.hasClass("onTop") == true) {
      //Remove the onTop class if it exists
      isOnTop = true;
      $burger.removeClass("onTop");
    }
    tl_nav_show.play().timeScale(1); //animated movie 실행
    $gnb.addClass("open"); //Show GNB background
    preventScroll();

    function preventScroll() {
      $("html").addClass("no_scroll");
      $(".wrap").css({ "margin-right": scrollBarWidth() });
      $(".footer").css({ width: "calc(100% - " + scrollBarWidth() + "px)" });
      $(".menu").css({ right: "+=" + scrollBarWidth() });
    }

    //Get scrollbar width that varies by browser
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

    $burger.removeClass("open"); //change burger icon

    tl_nav_show.reverse().timeScale(1.8); //animated movie 실행

    setTimeout(function () {
      $gnb.removeClass("open"); //Hide GNB Background

      if (isOnTop == true) {
        //If there is an onTop class when opening the menu, add it again
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

    //Timeline animated movie (GSAP)
    timeline_nav();

    //Header open/close when menu is clicked
    $burger.on("click", function (evt) {
      evt.preventDefault();

      tl_nav_show.reversed() ? openBurgerMenu() : closeBurgerMenu();

      if (!$gnb.hasClass("open")) {
        $burger.removeClass("open");
      }
    });

    //Close and move the burger when clicking the menu item
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
    //Give on class when scrolling more than 2/3 of the document
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

$(function () {
  // global variable declaration
  var $burger = null;
  var $logo = null;
  var scrollTop = 0;
  var topAreaHeight = 0;

  // Initializing an element for use globally
  function init() {
    $burger = $(".menu");
    $logo = $(".logo");
    topAreaHeight = $(".topArea").outerHeight();
  }

  function showTitle() {
    $("[data-ani]").each(function () {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      var windowBottom = $(window).scrollTop() + $(window).height() / 1.5;
      var $titleLine = $(this).next(".title_line");

      function showElemLine() {
        $titleLine.addClass("on");
      }

      if (windowBottom > objectBottom) {
        TweenLite.to($(this), 1.5, {
          className: "+=on",
          top: -10,
          ease: Power2.easeOut,
          onComplete: showElemLine(),
        });
      }
    });
  }

  function burgerColor() {
    if (scrollTop >= topAreaHeight) {
      $burger.add($logo).removeClass("onTop");
    } else {
      $burger.add($logo).addClass("onTop");
    }
  }

  function scrollTo(where) {
    $("html,body").stop().animate({ scrollTop: where });
  }

  // Event initialization
  function initEvent() {
    $(window).on("scroll", function () {
      scrollTop = $(window).scrollTop();

      showTitle();
      if ($(".wrap.about").length) {
        return false;
      }
      burgerColor();
    });

    $("h1").on("click", function () {
      // scrollToTop();
    });
  }

  $(window).on("load", function () {
    init();
    initEvent();
    scrollTop = $(window).scrollTop();
    burgerColor();

    if ($(".wrap.home").length) {
      var posWork = $(".article_work").offset().top;

      $("h1").on("click", function () {
        scrollTo(0);
      });
      $(".menu_work").on("click", function () {
        scrollTo(posWork);
      });
      $(".menu_about").on("click", function () {
        window.location.href = "about.html";
      });
    }
    if ($(".wrap.about").length) {
      $burger.add($logo).removeClass("onTop");

      $("h1").on("click", function () {
        window.location.href = "/";
      });
    }
    if ($(".wrap.work").length) {
      $("h1").on("click", function () {
        window.location.href = "/";
      });
    }
  });

  $(window).on("resize", function () {
    topAreaHeight = $(".topArea").outerHeight();
    //console.log(topAreaHeight);
  });
});

/*
   [ sub.js ]
   
   2018.05.30
   dongbui303@gmail.com

   Automatically create main page and sub page content.
    Now I feel the limits of jQuery @#$!@

*/

// ======================================

/* 
    [!] Set subpage content
*/

var customSubPage = {
  // 코인원: {
  //   show: true, //메인화면에서 보일지 여부를 선택합니다.
  //   name: "coinone", //폴더 및 이미지의 이름입니다. CSS 스타일링 역시 반드시 이 이름으로 지정해야 합니다.

  //   title: "Coinone Admin",
  //   desc: "코인원의 관리자 계정 페이지", //설명
  //   client: "Coinone", //클라이언트
  //   role: "UI Development & Design", //역할
  //   percent: "(100% &middot; 70%)", //기여도
  //   viewCode: true, //true = 코드 링크 있음, false = 코드 링크 없음

  //   detailTitle: "웹퍼블리싱 & 웹디자인 | 구축",
  //   detailInfo: [
  //     "코인원의 어드민 유저를 위해 만든 관리자 페이지입니다.<br/> 디자이너의 시안 없이, 컬러 가이드만 있는 상태에서 UI 개발을 진행했기에 기억에 남는 작업입니다.<br/>",
  //     "기획서를 보면서 바로 작업했기 때문에 제가 할 수 있는 범위가 넓어 즐겁게 작업할 수 있었습니다.<br/> 어드민 페이지이기 때문에 디자인 자체보다는 UX 측면을 중시하려 했고,<br/> 일부 요소들은 문구나 위치 선정에 있어 기획자와 디자이너의 의견을 물어가며 바꿔보기도 했습니다.<br/>",
  //     "또, 공통된 디자인 요소가 많았기 때문에 SASS 모듈화를 도입하였습니다.<br/> 주요 컬러는 변수에 넣고, 버튼 스타일은 mixin으로 만들어 빠르게 재사용할 수 있도록 했습니다.",
  //   ],

  //   link: false, //true = 외부링크 있음, flase = 서브페이지 있음
  // },

  // "AR GEAR": {
  //   show: true,
  //   name: "arGear",

  //   title: "AR GEAR",
  //   desc: "랜딩 페이지 (풀반응형)",
  //   client: "AR GEAR",
  //   role: "UI Development",
  //   percent: "(100%)",

  //   viewCode: true,
  //   detailTitle: "웹퍼블리싱 | 구축",
  //   detailInfo: [""],

  //   link: true,
  //   // 'existLink': 'http://argear.io',
  // },

  // 스테이지: {
  //   show: true,
  //   name: "stayge",

  //   title: "STAYGE One",
  //   desc: "랜딩 페이지 (풀반응형)",
  //   client: "STAYGE",
  //   role: "UI Development",
  //   percent: "(100%)",
  //   viewCode: false,
  //   detailTitle: "웹퍼블리싱 | 구축",
  //   detailInfo: [""],

  //   link: true,
  //   // 'existLink' : 'http://stayge.io/',
  // },

  ICOP: {
    show: true,
    name: "icop",

    title: "ICO Platform",
    desc: "Funding platform ",
    client: "ICON Foundation",
    role: "UI Development & Design",
    percent: "(100% &middot; 90%)",
    viewCode: false,
    detailTitle: "Web Publishing & Web Design | build ",
    detailInfo: [
      "It is a platform that helps you easily manage your ICO. Due to the tight deadline for work, the initial layout composition and publishing were carried out at the same time without the input of a designer. There was no guide draft at all, so I looked at the UID and worked with the goal of completing the markup and UI work quickly and delivering it to the development team.<br/>",
      "Also, since it was a React-based work, I was able to experience components, etc. Also, I realized the importance of version control while working with several people. I left the style branch and merged it with the dev branch to see the process of development being completed together. I could. ",
    ],

    link: false,
  },

  // "파트너스 협약식": {
  //   show: true,
  //   name: "partners",

  //   title: "Presentation Page",
  //   desc: "협약식 체결 화면",
  //   client: "the loop",
  //   role: "UI Development & Design",
  //   percent: "(100%)",
  //   viewCode: false,
  //   detailTitle: "웹퍼블리싱 | 구축",
  //   detailInfo: ["핀테크 랩 파트너스 협약식에 쓰일 view를 퍼블리싱 했습니다."],

  //   link: true,
  // },

  실크로드: {
    show: false,
    name: "silkroad",

    title: "silkroad",
    desc: "Landing Page (Full Responsive)",
    client: "silkroad Foundation",
    role: "UI Development",
    percent: "(100%)",
    viewCode: false,
    detailTitle: "Web Publishing | build",
    detailInfo: [""],

    link: true,
    existLink: "http://silkroadfoundation.io/",
  },

  "Chain Sign": {
    show: true,
    name: "sign",

    title: "Chain SIGN",
    desc: "Landing Page (Full Responsive)",
    client: "the loop",
    role: "UI Development",
    percent: "(100%)",
    viewCode: false,
    detailTitle: "Web Publishing | build ",
    detailInfo: [""],

    link: true,
    existLink: "http://chainsign.co.kr/",
  },

  챙스타: {
    show: true,
    name: "changstarr",

    title: "B-CARRY",
    desc: "Tofu, soy milk and Japanese dorayaki to Japanese people in Vietnam. Japanese food culture",
    client: "Shinichi Fujimoto",
    role: "UI Design | UX Research | Frontend",
    percent: "(100%)",
    viewCode: false,
    detailTitle: "Landing Page (Full Responsive)",
    detailInfo: [
      "We want to expand the business network for each store owning a website.<br/>",
    ],

    link: false,
  },

  "3M HCA": {
    show: true,
    name: "hca",

    title: "Lifestyle Labo",
    desc: "furniture store",
    client: "Van Lam",
    role: "UI-UX & Dev",
    percent: "(90%)",
    viewCode: true,
    detailTitle: "Landing Page (Full Responsive)",
    detailInfo: [
      "This is a platform web page for users of Lifestyle Labo products.<br/> It is divided into an admin site and an end user site, and the site for end users is responsive.<br/>",
      "I worked with an experienced publisher, and in the process, I was able to learn CSS writing and naming rules.<br/> Also, I was able to ask for the necessary content and how to smoothly deliver files by leaving comments. I was able to learn basic abilities, etc.<br/>",
      "It was quite a lot of maintenance, but it was a fun job that taught me how to quickly read and fix existing CSS<br/> and how to adjust priorities to avoid overwriting other CSS.<br/>",
    ],

    link: false,
  },

  "구 포트폴리오": {
    show: false,
    name: "old",

    title: "Old Portfolio",
    desc: "과거 포트폴리오 (반전매력?!)",
    client: "ME!",
    role: "UI Development & Design",
    percent: "(100%)",
    viewCode: false,
    detailTitle: "웹퍼블리싱 & 웹디자인 | 구축",
    detailInfo: ["개인 포트폴리오"],

    link: true,
  },

  "SBI 저축은행": {
    show: true,
    name: "sbi",

    title: "SBI BANK",
    desc: "SBI저축은행 하이브리드앱",
    client: "SBI Bank",
    role: "UI Development",
    percent: "(50%)",
    viewCode: false,
    detailTitle: "웹퍼블리싱 | 유지보수",
    detailInfo: [
      "SBI 저축은행의 앱에 추가로 들어갈 페이지를 만들어 전달드린 작업입니다.<br/> 유지보수 작업이라 쉽게 마쳤던 작업이지만, 다른 사람의 코드를 읽고 활용하는 방법을 배울 수 있었습니다.<br/> 이때 봐두었던 코드 덕분에, 나중에 웹뷰 페이지를 제작할 때 em 개념을 활용한 손쉬운 작업이 가능했습니다.",
    ],

    link: false,
  },

  "ICON 초기 랜딩페이지": {
    show: false,
    name: "icon",

    title: "ICON LANDING",
    desc: "ICON 랜딩 페이지 (반응형)",
    client: "ICON Fondation",
    role: "UI Development",
    percent: "(100%)",
    viewCode: false,
    detailTitle: "웹퍼블리싱 | 구축",
    detailInfo: [""],

    link: true,
  },

  "3M VR 예약페이지": {
    show: false,
    name: "vr",

    title: "3M VR",
    desc: "가상현실 체험 예약 페이지 (웹, 모바일)",
    client: "3M",
    role: "UI Development",
    percent: "(100%)",
    viewCode: true,
    detailTitle: "웹퍼블리싱 | 구축",
    detailInfo: [""],

    link: true,
  },
};

var subPageList = [];

// ======================================

//Check whether the subpage is an existing work item and put it in a variable.

function checkHasSubPage() {
  for (var i in customSubPage) {
    if (customSubPage[i].link === false) {
      subPageList.push(customSubPage[i].name);
    }
  }
}

function generateMainPage() {
  var myTurn = 0; //아이템이 삽입될 컬럼의 인덱스

  for (var i in customSubPage) {
    if (customSubPage[i].show === true) {
      var mainHtml = "";

      mainHtml += '<div class="work_item">';
      mainHtml += "<figure>";

      mainHtml +=
        ' <img src="images/thumb_' +
        customSubPage[i].name +
        '.png" alt="' +
        customSubPage[i].desc +
        '" class="work_image" /> ';

      if (customSubPage[i].link === true) {
        // link 프로퍼티가 true인 경우 external 링크 추가
        mainHtml += ' <figcaption class="work_caption external"> ';
      } else {
        mainHtml += ' <figcaption class="work_caption"> ';
      }

      mainHtml += ' <div class="caption_textWrap"> ';
      mainHtml +=
        ' <strong class="caption_title">' +
        customSubPage[i].title +
        "</strong> ";
      mainHtml += ' <p class="caption_desc">' + customSubPage[i].desc + "</p> ";
      mainHtml += " </div> ";

      if (customSubPage[i].link === true) {
        //link 프로퍼티가 true인 경우 링크 주소 변경. 이때, existLink가 있다면 그걸로 변경
        if (customSubPage[i].hasOwnProperty("existLink")) {
          mainHtml +=
            ' <a href="' +
            customSubPage[i].existLink +
            '" target="_blank"></a> ';
        } else {
          mainHtml +=
            ' <a href=" work/view_' +
            customSubPage[i].name +
            '/index.html" target="_blank"></a> ';
        }
      } else {
        mainHtml +=
          ' <a href=" work/work_' + customSubPage[i].name + '.html "></a> ';
      }

      mainHtml += " </figcaption> ";

      mainHtml += "</figure>";
      mainHtml += "</div>";

      $(".work_list .column").eq(myTurn).append(mainHtml); //인덱스 번호에 맞춰 아이템 삽입

      if (myTurn < $(".work_list .column").length - 1) {
        //컬럼 개수에 맞춰 인덱스 증가
        myTurn++;
      } else {
        myTurn = 0;
      }
    }
  }
}
// ======================================

function generateSubPage() {
  var pageName = $(".wrap").data("sub").substring(5);
  var maxNum = subPageList.length;

  // console.log('pageName=', pageName);
  // console.log('maxNum=', maxNum);

  for (var i in customSubPage) {
    //name이 일치하는 경우 서브페이지를 그려냅니다.
    if (customSubPage[i].name === pageName) {
      var num = subPageList.indexOf(pageName) + 1; //현재 페이지가 배열의 몇 번째인지 파악해 num에 대입합니다.

      // --
      // hero 화면 생성
      var html_hero = "";

      html_hero += '<div class="inner">';
      html_hero +=
        '<h2 class="hero_title">' +
        customSubPage[i].title +
        '<i class="hero_title_sm"> <span class="text_hide_m">featured</span> work #' +
        num +
        "</i></h2>";
      html_hero +=
        '<div class="hero_top"><p class="info_heading info_client">CLIENT<span class="info_text">' +
        customSubPage[i].client +
        '</span></p><p class="info_heading info_role">ROLE<span class="info_text">' +
        customSubPage[i].role +
        '<i class="info_percentage">' +
        customSubPage[i].percent +
        "</i></span></p></div>";
      html_hero += '<div class="hero_center">';

      if (customSubPage[i].viewCode === true) {
        //viewCode 프로퍼티가 true라면 링크 추가
        html_hero +=
          '<a href="view_' +
          customSubPage[i].name +
          '/index.html" target="_blank" class="hero_link btn_effect"><span>VIEW CODE</span></a>';
        html_hero +=
          '<p class="hero_scroll">or just scroll down to see screenshots!</p>';
      } else {
        html_hero +=
          '<p class="hero_scroll">Scroll down to see screenshots!</p>';
      }

      html_hero += "</div>";
      html_hero += "</div>";

      // --
      //detail top 화면 생성

      var html_detailTop = "";

      html_detailTop +=
        '<h2 class="detail_title">B-Carry. <i class="detail_title_sm">' +
        customSubPage[i].detailTitle +
        "</i></h2>";
      html_detailTop +=
        '<div class="detail_info"> <p class="detail_info_text">';

      for (var x = 0; x < customSubPage[i].detailInfo.length; x++) {
        html_detailTop += customSubPage[i].detailInfo[x];
        html_detailTop += '<span class="ly_mt_sm"></span>';
      }

      html_detailTop +=
        '<span class="detail_mobile br_m"> 모바일에선 현재 페이지를 확대할 수 있어요! <br/>두 손가락으로 화면을 확대한 뒤 살펴보세요. <i class="detail_ico"></i></span>';
      html_detailTop += '<span class="detail_line"></span>';
      html_detailTop += "</p></div>";

      // --
      //Insert alt in the detail main screen (I decided to write the image directly in html because of lazyload...)

      $(".shots_item_img").attr("alt", customSubPage[i].title + " Image");

      // --
      //create detail bottom screen
      var html_detailBottom = "";
      html_detailBottom += '<div class="bottom_inner">';

      var prevNum = 0;
      var nextNum = 0;

      //이전 서브페이지의 html 이름을 파악합니다.
      function getPrevHtmlName() {
        var prevHtml = subPageList[num - 2]; //배열에서 2번째 전 요소의 이름을 가져옵니다.

        if (prevHtml === undefined) {
          //이때 에러가 나면
          prevHtml = subPageList[subPageList.length - 1]; //배열 최대 수에서 가장 마지막을 가져옵니다.
        }

        return prevHtml;
      }

      //다음 서브페이지의 html 이름을 파악합니다.
      function getNextHtmlName() {
        var nextHtml = subPageList[num];

        if (nextHtml === undefined) {
          nextHtml = subPageList[0];
        }

        return nextHtml;
      }

      num <= 1 ? (prevNum = maxNum) : (prevNum = num - 1);
      num >= maxNum ? (nextNum = 1) : (nextNum = num + 1);

      html_detailBottom +=
        '<a href="work_' +
        getPrevHtmlName() +
        '.html" class="detail_btn prev"><span class="detail_btn_title">WORK #' +
        prevNum +
        "</span>Prev.</a>";

      if (customSubPage[i].viewCode === true) {
        html_detailBottom +=
          '<a href="view_' +
          customSubPage[i].name +
          '/index.html" target="_blank"  class="detail_link btn_effect"><span>view code</span></a>';
      }

      html_detailBottom +=
        '<a href="work_' +
        getNextHtmlName() +
        '.html" class="detail_btn next"><span class="detail_btn_title">WORK #' +
        nextNum +
        "</span>Next.</a>";
      html_detailBottom += "</div>";

      $(".hero").append(html_hero);
      $(".detail_top").append(html_detailTop);
      $(".detail_bottom").append(html_detailBottom);
      $(".wrap").addClass(customSubPage[i].name);

      //임시
      $("ul.shots a.item_link").on("click", function (evt) {
        evt.preventDefault();
      });
    }
  }
}

$(window).on("load", function () {
  checkHasSubPage();

  $(".wrap").data("sub") ? generateSubPage() : generateMainPage();
});
