// ==UserScript==
// @name         mars
// @namespace    http://tampermonkey.net/
// @version      2024-01-20
// @description  try to auto post message
// @author       mars
// @match        https://live.vhall.com/*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=vhall.com
// @grant        GM_log
// ==/UserScript==

(function () {
  'use strict';
  let $ = window.jquery;
  const root = document.getElementById('app');
  console.log(root);
  const inputDom = document.getElementById("");
  inputDom.value = "11",
  
  GM_log('', 'hello world!!');
})();
