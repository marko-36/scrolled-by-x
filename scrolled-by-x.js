window.lastScrollDir = "up";
window.lastScrollTop = window.pageYOffset;
window.scrollTreshold = 10; //

isBigScroll = (lastScrollTop, scrollTreshold) => {
  return (Math.abs(window.pageYOffset - lastScrollTop) > scrollTreshold) ? true : false
}

setScrollDir = (lastScrollTop) => {
  if (window.pageYOffset > lastScrollTop) {
    window.lastScrollDir = "down";
    console.log("down");
    $('.lastScrollDir').text('down');
    $('body').addClass('scrolledDown');
    return "down"
  } else {
    window.lastScrollDir = "up";
    console.log("up");    
    $('.lastScrollDir').text('up');
    $('body').removeClass('scrolledDown');
    return "up"
  }
}

$(window).scroll(function() {
  $('.pageYOffset').text(window.pageYOffset);
  if (isBigScroll(lastScrollTop, 10)) {
    setScrollDir(window.lastScrollTop);
    $('.lastScrollTop').text(window.lastScrollTop);
    window.lastScrollTop = window.pageYOffset;
  }
});
