class Box {
  constructor(element) {
    this.element = element;
    this.background = this.element.querySelector(".bg-color");
    this.element.addEventListener("mouseover", () => {
      this.mouseOver();
    });
    this.element.addEventListener("mouseout", () => {
      this.mouseOff();
    });
  }
  mouseOver() {
    this.background.style.background = "rgba(36, 41, 67, 0.9)";
  }
  mouseOff() {
    this.background.style.background = "";
  }
}

let boxes = Array.from(document.querySelectorAll(".box"));
console.log(boxes);
boxes.map(box => new Box(box));
