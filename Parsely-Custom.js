// ==UserScript==
// @name        Parsely-Custom
// @include     https://dash.parsely.com/*
// @grant       none
// ==/UserScript==
$(document).ready(function () {
  $('body').append('<div id="count" style="position:fixed;bottom:2px;right:2px;color:#333;">0</div>');
  f = 0;
  function ggLoopForever() {
    setInterval(function () {
      $('#count').text(f++);
      $('#main, .item-listing').css('background-color', '#090f14'); //posts page
      $('.left-col, .right-col, .panel-list').css('background-color', '#090f14'); //overview page
      $('.simple-title').css('font-size', '0.8em'); //Smaller post titles
      $('.post-row, .meta-row').css('background-color', '#1e2124'); //gray for anything not removed after this line
      $('a[href*="/obituaries"], a[href*="/realestate"], a[href*="/classifieds"], a[href*="/marketplace"]').closest('.post-row, .meta-row').css('background-color', '#090f14'); //removed sections
      $('a[href*="/authors/Staff"]').closest('.meta-row').css('background-color', '#090f14'); //remove Staff from authors but not posts
      $('.units').css({ //make units stand out
        'color': '#449ad8',
        'font-size': '1.5em'
      });
    }, 2000);
  }
  $(ggLoopForever);
});
