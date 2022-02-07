const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

//PARTE IPHONE
//capta a informação e executa o que programei
left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);

//capta a informação e executa o que programei
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

//PARTE SAMSUNG
//capta a informação e executa o que programei
right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);

//capta a informação e executa o que programei
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
