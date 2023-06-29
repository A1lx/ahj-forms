export default class PopoverBuilder {
  build() {
    const popoverElem = document.createElement('div');
    popoverElem.classList.add('popover-elem');
    popoverElem.innerHTML = `
      <div class="popover-title">
        <span>Popover title</span>
      </div>
      <div class="popover-text">
        <span>And here's some amazing content. It's very engaging. Right?</span>
      </div>
    `;
    return popoverElem;
  }
}