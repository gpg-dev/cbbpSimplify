// ==UserScript==
// @name         cbbp simplify
// @namespace    
// @downloadURL  
// @version      0.1.2
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

  let aI = document.querySelector('div[ts=aI]')
  let QG = document.querySelector('div[ts=QG]')
  let jG = document.querySelector('div[ts=jG]')
  let Fs = document.querySelector('div[ts=Fs]')
  let os = document.querySelector('div[ts=os]')
  let mC = document.querySelector('div[ts=mC]')
  let kD = document.querySelector('div[ts=kD]')
  let ci = document.querySelector('#ChatTabContents > div.inputDiv')
  

  aI.children[2].removeAttribute('style')
  aI.children[1].remove()
  QG.parentElement.removeAttribute('style')
  jG.style.margin = 0
  jG.previousSibling.style.width = 'auto'
  jG.previousSibling.style.float = 'none'
  jG.parentElement.style.height = 'auto'
  Fs.style.width = '100%'
  os.style.margin = '0 auto'
  os.style.position = 'relative'
  ci.width = 'auto'
  mC.removeAttribute('style')
  mC.style.margin = 0
  mC.style.width = '100%'
  kD.removeAttribute('style')
  kD.style.margin = 0
  kD.style.width = '100%'
  mC.firstChild.firstChild.style.width = '100%'

})();
