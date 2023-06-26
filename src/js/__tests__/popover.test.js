import Popover from '../Popover';

test('popover show', () => {

  const element = document.createElement('div');
  element.innerHTML = `
    <div class="popover-elem">
      <div class="popover-title">
        <span>Popover title</span>
      </div>
      <div class="popover-text">
        <span>And here's some amazing content. It's very engaging. Right?</span>
      </div>
    </div>
  `;

  const newPopover = new Popover;
  newPopover.showPopover();
  const popoverEl = document.querySelector('.popover-elem');

  expect(element).toEqual(popoverEl.innerHTML);
});