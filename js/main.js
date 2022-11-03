// window screen
$(document).ready(function () {
    $("#loading").fadeOut(1000, function () {
      $("body").css("overflow", "auto");
    });
  });
  


  $(".nav-link").click(function () {
    let href = $(this).attr("href");
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    let aboutScroll = $(href).offset().top;
    $("body,html").animate(
      { scrollTop: aboutScroll  },
      { queue: true, duration: 1000 }
    );
  });
  


