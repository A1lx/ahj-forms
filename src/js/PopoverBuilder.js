export default class PopoverBuilder {
  build() {
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
    return popoverElem;
  }
}