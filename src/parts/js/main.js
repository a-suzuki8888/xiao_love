fetch("parts/img/xiao.svg")
  .then(res => res.text())
  .then(data => {
    document.getElementById("svg-container").innerHTML = data;

    // SVG読み込んでからアニメ実行！
    gsap.to("#ahoge", {
      rotation: 10,
      transformOrigin: "bottom center",
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  });
