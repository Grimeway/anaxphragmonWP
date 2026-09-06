import VanillaTilt from "vanilla-tilt";

export default function initTiltAnimation() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !window.matchMedia("(hover: hover) and (pointer: fine)").matches
  )
    return;

  const elements = document.querySelectorAll(".js-tilt");
  VanillaTilt.init(elements);
}
