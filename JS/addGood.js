'use strict';

const addGoodBtn = getDomElements().callModal;
const overlay = getDomElements().overlay;
const modalWindow = getDomElements().modalWindow; 
const addGoodOverlay = getDomElements().addGoodOverlay;
const exitButton = getDomElements().modalExitButton;

addGoodBtn.addEventListener('click', () => {
  addGoodOverlay.classList.add('overlay_display_flex');
  console.log(addGoodOverlay.classList);
});

overlay.addEventListener('click', e => {
  const target = e.target;
  if (target === overlay || target.classList.contains('modal__exit-icon')) {
    addGoodOverlay.classList.remove('overlay_display_flex');
    console.log(addGoodOverlay.classList);
    console.log('правильно')
  }
});
