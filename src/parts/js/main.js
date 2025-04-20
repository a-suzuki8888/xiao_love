fetch("parts/img/xiao.svg")
  .then(res => res.text())
  .then(data => {
    document.getElementById("svg-container").innerHTML = data;

    gsap.to("#ahoge", {
      rotation: 10,
      transformOrigin: "bottom center",
      yoyo: true,
      repeat: -1,
      duration: 1.5,
      ease: "sine.inOut"
    });

    gsap.to("#front_x5F_hair", {
      rotation: 3,
      transformOrigin: "top center",
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut"
    });

    gsap.to("#back_x5F_hair", {
      skewX: 2,
      y: 2,
      rotation: 1,
      transformOrigin: "top center",
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  });
