import Popover from './Popover';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const popoverElem = document.querySelector('.popover-elem');
  const newPopover = new Popover();

  if (popoverElem) {
    newPopover.removePopover();
  } else {
    newPopover.showPopover();
  }
});
