// ==UserScript==
// @name        Parsely-Custom
// @include     https://dash.parsely.com/*
// @grant       none
// ==/UserScript==
$(document).ready(function () {
  function ggLoopForever() {
    setInterval(function () {
      $('#main, .item-listing').css('background-color', '#090f14'); //posts page
      $('.left-col, .right-col, .panel-list').css('background-color', '#090f14'); //overview page
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
