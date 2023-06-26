export default class Popover {
  // eslint-disable-next-line
  showPopover() {
    const popoverElem = document.createElement('div');
    popoverElem.innerHTML = `
      <div class="popover-elem">
        <div class="popover-title">
          <span>Popover title</span>
        </div>
        <div class="popover-text">
          <span>And here's some amazing content. It's very engaging. Right?</span>
        </div>
      </div>
    `;
    document.body.appendChild(popoverElem);

    const popoverEl = document.querySelector('.popover-elem');
    const btn = document.querySelector('.btn');
    const { left, top } = btn.getBoundingClientRect();

    popoverEl.style.top = `${top - 5 - popoverEl.offsetHeight}px`;
    popoverEl.style.left = `${left + (btn.offsetWidth / 2) - (popoverEl.offsetWidth / 2)}px`;
  }
  // eslint-disable-next-line
  removePopover() {
    const popoverElem = document.querySelector('.popover-elem');
    popoverElem.remove();
  }
}
