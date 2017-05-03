// ==UserScript==
// @name        Parsely-Custom
// @include     https://dash.parsely.com/theindependent.com/*
// @grant       none
// ==/UserScript==
$(document).ready(function () {
  function ggLoopForever() {
    setInterval(function () {
      $('#main, .item-listing').css('background-color', '#090f14'); //posts page
      $('.left-col, .right-col, .panel-list').css('background-color', '#090f14'); //overview page
      $('.post-row').css('background-color', '#1e2124'); //gray for anything not removed after this line
      $('a[href*="/obituaries"], a[href*="/realestate"], a[href*="/classifieds"], a[href*="/marketplace"]').closest('.post-row').css('background-color', '#090f14'); //removed
    }, 2000);
  }
  $(ggLoopForever);
});
