$(document).ready(function () {
  /**
   * Active Logic */

  // Get All Li.nav-item tags
  $("header .nav-item").click(function () {
    // add active class to current li && remove from other lis
    $(this).addClass("active-li").siblings().removeClass("active-li");
  });
});
