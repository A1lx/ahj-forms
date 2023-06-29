import Popover from "./Popover";

const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
  e.preventDefault();

  const newPopover = new Popover('.btn');
  //                 new Popover(builder?, position?, buttonSelector)
  newPopover.showPopover();
});