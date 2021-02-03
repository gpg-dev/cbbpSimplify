// ==UserScript==
// @name         cbbp simplify
// @namespace    https://github.com/dvere/cbbpSimplify
// @downloadURL  https://github.com/dvere/cbbpSimplify/raw/master/cbbpSimplify.user.js
// @version      0.2.1
// @description  Improve the layout of chaturbate.com member broadcast page
// @author       dvere
// @match        https://chaturbate.com/b/*
// @match        https://testbed.cb.dev/b/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Zero out body minimum width
  document.body.style.minWidth = 0

  // Kill some useless elements
  let junk_elements = [
      '#header',
      'div.footer-holder',
      'div.top-section',
      '.content .ad',
      '#main .banner'
  ]

  junk_elements.forEach(e => (document.querySelector(e) && document.querySelector(e).remove()))

  let broadcastRoot = document.querySelector('#main > div:nth-child(5)')
  let broadcastHeader = broadcastRoot.children[1]
  let broadcastOuterContainer = broadcastRoot.children[2]
  let broadcastInnerContainer = broadcastOuterContainer.firstElementChild
  let broadcastHeadline = broadcastInnerContainer.childNodes[1]
  let broadcastBox = broadcastInnerContainer.childNodes[2]
  let room = broadcastBox.firstElementChild
  let camBox = room.firstElementChild
  let chatBox = room.children[1]
  let player = document.getElementById('player')

  broadcastHeader.remove()
  broadcastRoot.removeAttribute('style')
  broadcastOuterContainer.removeAttribute('style')
  broadcastInnerContainer.removeAttribute('style')
  room.removeAttribute('style')
  player.children[2].style.position = 'relative'
  camBox.setAttribute('style', 'margin: 0 2px; background: rgb(255, 255, 255); border: 1px solid rgb(172, 172, 172); border-radius: 4px;')
  chatBox.setAttribute('style', 'margin: 0 2px; background: rgb(255, 255, 255); border: 1px solid rgb(172, 172, 172); border-radius: 4px;')

})();
