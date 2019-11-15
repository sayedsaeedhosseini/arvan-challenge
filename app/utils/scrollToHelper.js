import animateScrollTo from 'animated-scroll-to';

function getElementOffsetY(node) {
  const currentNode = node;
  let currentTop = 0;
  let currentTopScroll = 0;
  if (currentNode.offsetParent) {
    do {
      currentTop += currentNode.offsetTop;
      currentTopScroll = currentNode.offsetParent
        ? currentNode.offsetParent.scrollTop
        : 0;
    } while (currentNode === currentNode.offsetParent);
    return currentTop - currentTopScroll;
  }
  return 0;
}

export function scrollToElement(selector, { offset }) {
  const element = document.querySelector(selector);
  // if (element === null) {
  //   if (__DEV__) {
  //     console.warn(
  //       `element with selector ${selector} was not found in DOM. ignoring scroll.`,
  //     );
  //   }
  //   return;
  // }
  const position = getElementOffsetY(element) + offset;
  animateScrollTo(position, {
    minDuration: 250,
    maxDuration: 800,
  });
}
