/// 3D object perspective
// Source: https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html
// (inspiration): https://github.com/jchen/site/blob/0ade8a3e5f174563974574eaf2cfc6b90cdf9bae/src/components/Fortune/Fortune.astro

let constrain = 150;
let mouseOverContainer = document.getElementsByTagName("html")[0];
let rotationalContainer = document.getElementById("rotational-container");

mouseOverContainer.onmousemove = function (e) {
  rotationalContainer &&
    window.requestAnimationFrame(function () {
      let box = rotationalContainer.getBoundingClientRect();
      let calcX = -(e.clientY - box.y - box.height / 2) / constrain;
      let calcY = (e.clientX - box.x - box.width / 2) / constrain;
      let transformation = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
      rotationalContainer.style.transform = transformation;
    });
};
