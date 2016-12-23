function stopProp (e) {
  e.stopPropagation();
}

function fadeIn(node, speed) {
  if (!node) return;
  speed = speed || 10;

  function increaseOpacity() {
    if (parseFloat(node.style.opacity) < 1) {
      node.style.opacity = (parseFloat(node.style.opacity) + 0.05);
      setTimeout(increaseOpacity, speed);
    } else {
      node.style.opacity = 1;
    }
  }
  node.style.opacity = 0;
  setTimeout(increaseOpacity, speed);
}
