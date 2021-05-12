import anime from'libs/anime.min.js';

var elements = document.querySelectorAll('.dom-node-demo .el');

anime({
  targets: elements,
  translateX: 270
});
