/**
 * @jest-environment jsdom
 * @jest-enveroment-options { "url": "https://jestjs.io/"}
*/

test('popover show', () => {
  const buttonElem = document.querySelector('.btn');
  buttonElem.click();

  const popoverElem = document.querySelector('.popover-elem');
  expect(popoverElem).toBeTruthy();
});