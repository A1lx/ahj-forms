export default class PopoverPosition {
  getPosition(popoverElem, buttonElem) {
    const { left, top } = buttonElem.getBoundingClientRect();
    popoverElem.style.top =`${top - 5 - popoverElem.offsetHeight}px`;
    popoverElem.style.left =`${left + (buttonElem.offsetWidth / 2) - (popoverElem.offsetWidth / 2)}px`;
  } 
}