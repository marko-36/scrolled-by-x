var body = document.querySelector("body");
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
    //$('.lastScrollDir').text('down');
    document.querySelector(".lastScrollDir").textContent = 'down'    
    body.classList.add('scrolledDown');
    return "down"
  } else {
    window.lastScrollDir = "up";
    console.log("up");    
    //$('.lastScrollDir').text('up');
    document.querySelector(".lastScrollDir").textContent = 'up'
    body.classList.remove('scrolledDown');  
    return "up"
  }
}

window.onscroll = function() {   
  document.querySelector(".pageYOffset").textContent = window.pageYOffset
  if (isBigScroll(lastScrollTop, 10)) {
    setScrollDir(window.lastScrollTop);
    document.querySelector(".lastScrollTop").textContent = window.lastScrollTop
    window.lastScrollTop = window.pageYOffset;
  }
};
