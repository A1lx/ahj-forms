export default class Popover {
  constructor(builder, position, buttonSelector) {
    this.builder = builder;
    this.position = position;
    this.buttonElem = document.querySelector(buttonSelector);
  }

  showPopover() {
    this.popoverElem = this.builder.build();
    this.position.position(this.popoverElem, this.buttonElem);
    document.body.appendChild(this.popoverElem);
  }

  removePopover() {
    this.popoverElem.remove();
  }
}