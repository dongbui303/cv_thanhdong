/*common.js*/
$(function () {
  //로딩 이미지 제거
  function removeLoading() {
    $(".loading").fadeOut(800);
    //$(".loading").css({'z-index':'-100'});
  }

  // GNB 생성 함수
  function gnbMaker() {
    var html = "";

    html += ' <div class="fixed"> ';
    html += ' <h1 class="logo"> ';
    html += ' <span class="text_hide">Ds portfolio</span> ';
    html += " <div> ";
    html +=
      ' <svg class="title_logo" enable-background="new 0 0 240 236" version="1.1" viewBox="0 0 300 260" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> ';
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
    html += ' <a href="tel:01027285936" class="contact_link"> ';
    html += ' <span class="contact_heading">PHONE</span>';
    html += ' <span class="contact_info">+84 987 800 662</span> ';
    html += " </a> ";
    html += ' <a href="https://github.com/dongbui303" class="contact_link"> ';
    html += ' <span class="contact_heading">GITHUB</span>  ';
    html += ' <span class="contact_info">ThanhDong</span> ';
    html += " </a> ";
    html += " </div> ";
    html += " </nav> ";

    $(".header").append(html);
  }

  // Footer 생성 함수
  function footerMaker() {
    var updateDay = "June 3rd";

    var html = "";

    html +=
      ' <h2 class="title footer_title">Let&acute;s start right Now!</h2> ';
    html +=
      ' <p class="footer_text">Ready to work. Please contact me at your convenience!</p> ';
    html += ' <address class="footer_address"> ';
    html +=
      ' <a href="mailto:dongbui303@gmail.com" class="footer_link link_mail"> ';
    html += ' <span class="icon_circle"></span> ';
    html += ' <span class="footer_link_text"></span> ';
    html += " </a> ";
    html += ' <a href="tel:+84987800662" class="footer_link link_phone"> ';
    html += ' <span class="icon_circle"></span> ';
    html += ' <span class="footer_link_text"></span> ';
    html += " </a> ";
    html += " </address> ";
    html += ' <div class="footer_bottom"> ';
    html += ' <ul class="social"> ';
    html +=
      ' <li class="social_item social_blog"><a href="https://www.linkedin.com/in/thanh-dong/" target="_blank">Linkedin</a></li> ';
    html +=
      ' <li class="social_item social_codepen"><a href="https://www.behance.net/dongthanh1" target="_blank">behance</a></li> ';
    html +=
      ' <li class="social_item social_github"><a href="https://github.com/dongbui303" target="_blank">github</a></li> ';
    html += " </ul> ";
    html += ' <p class="update">Last Updated On ' + updateDay + ", 2021</p> ";
    html += ' <p class="copyright">&copy; 2021 ThanhDong</p> ';
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
