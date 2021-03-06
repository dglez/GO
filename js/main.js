// Generated by CoffeeScript 1.9.2
(function() {
  var i, item, len, liHeight, menuItems, toggle;

  menuItems = $('.menu ul').find('li');

  liHeight = $(window).height() / menuItems.length;

  toggle = true;

  for (i = 0, len = menuItems.length; i < len; i++) {
    item = menuItems[i];
    $(item).height(liHeight).css('padding-top', $(window).height() / 12 - 14 + 'px');
    $('.menu').width(liHeight);
  }

  $(window).resize(function() {
    var j, len1;
    liHeight = $(window).height() / menuItems.length;
    $('.menu').width(liHeight);
    for (j = 0, len1 = menuItems.length; j < len1; j++) {
      item = menuItems[j];
      $(item).css({
        'padding-top': $(window).height() / 12 - 14 + 'px',
        'height': liHeight + 'px'
      });
    }
  });

  $('.switch').click(function() {
    if (toggle) {
      $(this).transition({
        rotate: '180deg'
      });
      $('.menu').transition({
        x: -liHeight + 'px'
      });
      toggle = false;
    } else {
      $(this).transition({
        rotate: '0deg'
      });
      $('.menu').transition({
        x: '0px'
      });
      toggle = true;
    }
  });

}).call(this);


//# sourceMappingURL=main.js.map
